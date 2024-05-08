import React from "react";
import {
  Avatar,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  List,
  ListItem,
  ListItemPrefix,
  Textarea,
  IconButton,
  CardBody,
  Card,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Radio,
} from "@material-tailwind/react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MessageIcon from "@mui/icons-material/Message";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CallIcon from "@mui/icons-material/Call";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SearchIcon from "@mui/icons-material/Search";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import Message from "../components/Message/Message";
import Chatlist from "../components/Chatlist/Chatlist";
import { Client } from "@stomp/stompjs";
import { WebSocket } from "ws";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
function Dashboard() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [page, setPage] = React.useState("message");
  const [chat, setChat] = React.useState([]);
  const [info, setInfo] = React.useState();
  const [current_info, setCurrent_info] = React.useState();
  const [index, setIndex] = React.useState(-1);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const handleOpen1 = () => setOpen1(!open1);
  const handleOpen2 = () => setOpen2(!open2);
  const handleOpen3 = () => setOpen3(!open3);
  const handlePage = (page) => setPage(page);
  const handleIndex = (index) => setIndex(index);
  const handleChat = (chat) => setChat(chat);
  const handleInfo = (info) => setInfo(info);
  const fileInput = React.useRef(null);

  const logOut = async () => {
    localStorage.removeItem("token");
    const response = await axios.get("http://localhost:8099/auth/logout", {
      mode: "cors",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
    window.location.href = "/";
  };
  const Toast = withReactContent(Swal).mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const handleAvatarClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleOpen1();
    Swal.fire({
      title: "Đây sẽ là ảnh đại diện mới của bạn!",
      imageUrl: file ? URL.createObjectURL(file) : "",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          username: current_info.username,
          password: current_info.password,
          emailAddress: current_info.emailAddress,
          avatarUrl: file ? file.name : current_info.avatarUrl,
          firstName: current_info.firstName,
          lastName: current_info.lastName,
          birthDate: current_info.birthDate,
        };
        const response = axios
          .put(
            "http://localhost:8099/users/" + localStorage.getItem("user"),
            data,
            {
              mode: "cors",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              Toast.fire({
                icon: "success",
                title: "Update successfully",
              });
              loadcurrent_info();
            }
            if (response.status === 401) {
              localStorage.removeItem("token");
              window.location.reload();
            }
          });
      }
    });
  };
  if (!localStorage.getItem("token")) {
    window.location.href = "/";
  }
  const loadcurrent_info = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8099/users/" + localStorage.getItem("user"),
        {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setCurrent_info(response.data);
      setUsername(response.data.username);
      setPassword(response.data.password);
      setPhoneNumber(response.data.phoneNumber);
      setFirstname(response.data.firstName);
      setLastname(response.data.lastName);
      setEmail(response.data.emailAddress);
      setBirthday(response.data.birthDate);
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
      }
    }
  };
  React.useEffect(() => {
    loadcurrent_info();
  }, []);
  const changeInfo = async (
    username,
    password,
    phoneNumber,
    firstname,
    lastname,
    email,
    birthday,
    avatarUrl
  ) => {
    handleOpen2();
    const data = {
      username: username,
      password: password,
      phoneNumber: phoneNumber,
      emailAddress: email,
      firstName: firstname,
      lastName: lastname,
      birthDate: birthday,
      avatarUrl: avatarUrl,
    };
    const response = await axios.put(
      "http://localhost:8099/users/" + localStorage.getItem("user"),
      data,
      {
        mode: "cors",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      Toast.fire({
        icon: "success",
        title: "Update successfully",
      }).then(() => {
        loadcurrent_info();
        handleOpen1();
      });
    }
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 grid grid-cols-8 border-r-2 h-screen border-gray-300">
        <div className="col-span-2">
          <div className="flex flex-col h-screen bg-[#0091ff]">
            <div className="mt-5 p-5">
              <div className="grid justify-center items-center">
                <Avatar
                  src={
                    current_info && current_info.avatarUrl
                      ? "/" + current_info.avatarUrl
                      : "https://docs.material-tailwind.com/img/face-2.jpg"
                  }
                  alt="avatar"
                  size="lg"
                  className="mt-1 border-2 border-white"
                  onClick={handleOpen1}
                />
              </div>
              <Dialog size="xs" open={open1} handler={handleOpen1}>
                <DialogHeader>Thông tin tài khoản</DialogHeader>
                <DialogBody className="p-0">
                  <div className="p-0 w-full h-40">
                    <img
                      src="https://th.bing.com/th/id/OIP.bDWroXGTDAKMZEyKRBpaVAHaEK?rs=1&pid=ImgDetMain"
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="grid grid-cols-3 justify-items-center">
                        <Avatar
                          src={
                            current_info && current_info.avatarUrl
                              ? "/" + current_info.avatarUrl
                              : "https://docs.material-tailwind.com/img/face-2.jpg"
                          }
                          alt="avatar"
                          size="xl"
                          onClick={handleAvatarClick}
                        />
                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInput}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <Typography
                          className="text-right mt-10 col-span-2"
                          variant="h5"
                        >
                          {current_info
                            ? current_info.firstName +
                              " " +
                              current_info.lastName
                            : ""}
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Typography variant="h6">Thông tin cá nhân</Typography>
                    <div className="grid grid-cols-3 gap-4 my-3 text-left">
                      <Typography variant="small">Email</Typography>
                      <Typography className="col-span-2" variant="small">
                        {current_info ? current_info.emailAddress : ""}
                      </Typography>
                    </div>
                    <div className="grid grid-cols-3 gap-4 my-3 text-left">
                      <Typography variant="small">Ngày sinh</Typography>
                      <Typography className="col-span-2" variant="small">
                        {new Date(birthday).getDate() +
                          " tháng " +
                          (new Date(birthday).getMonth() + 1) +
                          " năm " +
                          new Date(birthday).getFullYear()}
                      </Typography>
                    </div>
                    <div className="grid grid-cols-3 gap-4 my-3 text-left">
                      <Typography variant="small">Số điện thoại</Typography>
                      <Typography className="col-span-2" variant="small">
                        {current_info ? current_info.phoneNumber : ""}
                      </Typography>
                    </div>
                  </div>
                  <Divider />
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    onClick={() => {
                      handleOpen1(), handleOpen2();
                    }}
                    className="w-full"
                  >
                    <span>
                      Cập nhật <DriveFileRenameOutlineIcon />
                    </span>
                  </Button>
                </DialogFooter>
              </Dialog>
              <Dialog size="sm" open={open2} handler={handleOpen2}>
                <DialogHeader>
                  <Button variant="text" size="sm" onClick={handleOpen2}>
                    <ArrowBackIosIcon />
                  </Button>
                  <Typography variant="h5">
                    Chỉnh sửa thông tin cá nhân
                  </Typography>
                </DialogHeader>
                <DialogBody>
                  <Input
                    label="Username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <div className="mt-5">
                    <Typography variant="h6">Thông tin cá nhân</Typography>
                    <div className="gap-4 my-3 text-left grid grid-cols-2">
                      <div>
                        <Typography variant="small" className="pb-2">
                          Họ
                        </Typography>
                        <Input
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </div>
                      <div>
                        <Typography variant="small" className="pb-2">
                          Tên
                        </Typography>
                        <Input
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="my-3 text-left">
                      <Typography variant="small" className="pb-2">
                        Email
                      </Typography>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="my-3 text-left grid grid-cols-2 gap-4">
                      <div>
                        <Typography variant="small" className="pb-2">
                          Số điện thoại
                        </Typography>
                        <Input
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <div>
                        <Typography variant="small" className="pb-2">
                          Ngày sinh
                        </Typography>
                        <Input
                          type="date"
                          value={birthday}
                          onChange={(e) => setBirthday(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <Divider />
                </DialogBody>
                <DialogFooter className="pt-0 gap-4 grid grid-cols-2">
                  <Button
                    variant="gradient"
                    color="red"
                    onClick={() => {
                      handleOpen2(), handleOpen1();
                    }}
                    className="w-50"
                  >
                    <span>Hủy</span>
                  </Button>
                  <Button
                    variant="gradient"
                    color="blue"
                    onClick={() => {
                      changeInfo(
                        username,
                        password,
                        phoneNumber,
                        firstname,
                        lastname,
                        email,
                        birthday,
                        current_info.avatarUrl
                      );
                    }}
                    className="w-50"
                  >
                    <span>Đồng ý</span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </div>
            <div className="">
              <Button
                onClick={() => handlePage("message")}
                variant="text"
                className={
                  page === "message"
                    ? "w-full p-5 grid justify-center items-center bg-[#006edc]"
                    : "w-full p-5 grid justify-center items-center"
                }
              >
                <Tooltip content="Tin nhắn">
                  {page === "message" ? (
                    <MessageIcon sx={{ color: "white" }} fontSize="large" />
                  ) : (
                    <MessageOutlinedIcon
                      sx={{ color: "white" }}
                      fontSize="large"
                    />
                  )}
                </Tooltip>
              </Button>
            </div>
            <div className="">
              <Button
                onClick={() => handlePage("group")}
                variant="text"
                className={
                  page === "group"
                    ? "w-full p-5 grid justify-center items-center bg-[#006edc]"
                    : "w-full p-5 grid justify-center items-center"
                }
              >
                <Tooltip content="Nhóm">
                  {page === "group" ? (
                    <GroupsIcon sx={{ color: "white" }} fontSize="large" />
                  ) : (
                    <GroupsOutlinedIcon
                      sx={{ color: "white" }}
                      fontSize="large"
                    />
                  )}
                </Tooltip>
              </Button>
            </div>
            <div className="h-full">
              <Button
                onClick={() => handlePage("friend")}
                variant="text"
                className={
                  page === "friend"
                    ? "w-full p-5 grid justify-center items-center bg-[#006edc]"
                    : "w-full p-5 grid justify-center items-center"
                }
              >
                <Tooltip content="Bạn bè">
                  {page === "friend" ? (
                    <PeopleIcon sx={{ color: "white" }} fontSize="large" />
                  ) : (
                    <PeopleOutlinedIcon
                      sx={{ color: "white" }}
                      fontSize="large"
                    />
                  )}
                </Tooltip>
              </Button>
            </div>
            <div className="">
              <Button
                onClick={() => {
                  handlePage("setting"), handleOpen3();
                }}
                variant="text"
                className={
                  page === "setting"
                    ? "w-full p-5 grid justify-center items-center bg-[#006edc]"
                    : "w-full p-5 grid justify-center items-center"
                }
              >
                <Tooltip content="Cài đặt">
                  {page === "setting" ? (
                    <SettingsIcon sx={{ color: "white" }} fontSize="large" />
                  ) : (
                    <SettingsOutlinedIcon
                      sx={{ color: "white" }}
                      fontSize="large"
                    />
                  )}
                </Tooltip>
              </Button>
              <Dialog size="xs" open={open3} handler={handleOpen3}>
                <DialogHeader>
                  <Typography variant="h5">Đổi mật khẩu</Typography>
                </DialogHeader>
                <DialogBody>
                  <div className="mb-5">
                    <Typography variant="small">Mật khẩu mới</Typography>
                    <Input
                      label="Nhập mật khẩu hiện tại"
                      placeholder="Nhập mật khẩu hiện tại"
                      className="mt-1 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      type="password"
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                  <Divider />
                  <div className="my-5">
                    <Typography variant="small">Mật khẩu mới</Typography>
                    <Input
                      label="Nhập mật khẩu mới"
                      placeholder="Nhập mật khẩu mới"
                      className="mt-1 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      type="password"
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                  <div className="my-5">
                    <Typography variant="small">
                      Nhập lại mật khẩu mới
                    </Typography>
                    <Input
                      label="Nhập lại mật khẩu mới"
                      placeholder="Nhập lại mật khẩu mới"
                      className="mt-1 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      type="password"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </DialogBody>
                <DialogFooter className="pt-0 gap-4 grid grid-cols-2">
                  <Button
                    variant="gradient"
                    color="red"
                    onClick={() => {
                      handleOpen3();
                    }}
                    className="w-50"
                  >
                    <span>Hủy</span>
                  </Button>
                  <Button
                    variant="gradient"
                    color="blue"
                    onClick={() => {
                      handleOpen3();
                    }}
                    className="w-50"
                  >
                    <span>Đồng ý</span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </div>
            <div className="">
              <Button
                onClick={() => handlePage("logout")}
                variant="text"
                className={
                  page === "logout"
                    ? "w-full p-5 grid justify-center items-center bg-[#006edc]"
                    : "w-full p-5 grid justify-center items-center"
                }
              >
                <Tooltip content="Đăng xuất">
                  <ExitToAppOutlinedIcon
                    sx={{ color: "white" }}
                    fontSize="large"
                    onClick={logOut}
                  />
                </Tooltip>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-6 ">
          {/* <div className="m-4 grid grid-cols-6">
            <div className="col-span-4 ">
              <div className="relative flex w-full gap-2 md:w-max">
                <div className="relative h-10 w-full ">
                  <input
                    type="search"
                    placeholder="Search"
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                </div>
                <div className="!absolute left-3 top-[13px]">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                      fill="#CFD8DC"
                    ></path>
                    <path
                      d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                      stroke="#CFD8DC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <Button size="sm" variant="text">
              <GroupAddOutlinedIcon />
            </Button>
            <Button size="sm" variant="text">
              <PersonAddOutlinedIcon />
            </Button>
          </div>
          <Divider sx={{ borderWidth: "1px" }}></Divider>
          <div className="grid grid-cols-4 w-100 p-3 hover:bg-gray-200 transition-transform ">
            <div className="grid justify-center">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="md"
                className="mt-1"
              />
            </div>
            <div className="col-span-3 mt-1">
              <div className="grid grid-cols-3">
                <div className="col-span-2">
                  <Typography variant="h6">Tania Andrew</Typography>
                </div>
                <div></div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-3">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Hello
                  </Typography>
                </div>
                <div className="grid justify-end">
                  <Chip color="success" size="small" label="1" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 w-100 p-3 hover:bg-gray-200 transition-transform ">
            <div className="grid justify-center">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="md"
                className="mt-1"
              />
            </div>
            <div className="col-span-3 mt-1">
              <div className="grid grid-cols-3">
                <div className="col-span-2">
                  <Typography variant="h6">Tania Andrew</Typography>
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="col-span-3">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Hello
                  </Typography>
                </div>
                <div className="grid justify-end">
                  <NotificationsOffIcon />
                </div>
              </div>
            </div>
          </div> */}
          <Chatlist
            page={page}
            index={index}
            handleIndex={handleIndex}
            handleChat={handleChat}
            handleInfo={handleInfo}
          />
        </div>
      </div>
      <div className="col-span-8 grid grid-rows-10 h-screen">
        {/* <div className="row-span-1 grid grid-cols-2 border-b-2">
          <div className=" ms-10 flex items-center gap-4">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="sm"
            />
            <div>
              <Typography variant="h6">Tania Andrew</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Web Developer
              </Typography>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-4 items-center justify-end me-5">
            <div>
              <IconButton color="blue-gray" variant="text">
                <SearchIcon />
              </IconButton>
              <IconButton color="blue-gray" variant="text">
                <CallIcon />
              </IconButton>
              <IconButton variant="text" color="blue-gray">
                <MoreHorizIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="row-span-8 overflow-y-scroll">
          <div
            className="mx-auto bottom-0 right-0 mb-5"
            style={{ width: "90%" }}
          >
            <div className="mt-5 grid grid-cols-1 gap-10">
              <Card
                color="transparent"
                shadow={false}
                className="w-full right-0 justify-self-end border-2 max-w-[40rem]"
              >
                <CardBody className="p-3">
                  <Typography>
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </Typography>
                  <Typography className="text-right">12:45</Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10">
              <Card
                color="transparent"
                shadow={false}
                className="w-full border-2 max-w-[40rem]"
              >
                <CardBody className="p-3">
                  <Typography color="black">
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </Typography>
                  <Typography>12:45</Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10">
              <Card
                color="transparent"
                shadow={false}
                className="w-full border-2 max-w-[40rem]"
              >
                <CardBody className="p-3">
                  <Typography color="black">
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </Typography>
                  <Typography>12:45</Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10">
              <Card
                color="transparent"
                shadow={false}
                className="w-full border-2 max-w-[40rem]"
              >
                <CardBody className="p-3">
                  <Typography color="black">
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </Typography>
                  <Typography>12:45</Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10">
              <Card
                color="transparent"
                shadow={false}
                className="w-full border-2 max-w-[40rem]"
              >
                <CardBody className="p-3">
                  <Typography color="black">
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </Typography>
                  <Typography>12:45</Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10">
              <Card
                color="transparent"
                shadow={false}
                className="w-full border-2 max-w-[40rem]"
              >
                <CardBody className="p-3">
                  <Typography color="black">
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </Typography>
                  <Typography>12:45</Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10">
              <Card
                color="transparent"
                shadow={false}
                className="w-full border-2 max-w-[40rem]"
              >
                <CardBody className="p-3">
                  <Typography color="black">
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </Typography>
                  <Typography>12:45</Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10">
              <Card
                color="transparent"
                shadow={false}
                className="w-full border-2 max-w-[40rem]"
              >
                <CardBody className="p-3">
                  <Typography color="black">
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </Typography>
                  <Typography>12:45</Typography>
                </CardBody>
              </Card>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-10">
              <Card
                color="transparent"
                shadow={false}
                className="w-full border-2 max-w-[40rem]"
                ref={messagesEndRef}
              >
                <CardBody className="p-3">
                  <Typography color="black">
                    &quot;I found solution to all my design needs from Creative
                    Tim. I use them as a freelancer in my hobby projects for
                    fun! And its really affordable, very humble guys !!!&quot;
                  </Typography>
                  <Typography>12:45</Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div className="row-span-1 align-bottom">
          <div className="mx-auto" style={{ width: "90%" }}>
            <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-1">
              <div className="flex">
                <IconButton variant="text" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </IconButton>
                <IconButton variant="text" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </IconButton>
              </div>
              <Textarea
                rows={1}
                resize={true}
                autoComplete="off"
                onChange={onChange}
                placeholder="Message"
                className="min-h-full !border-0 focus:border-transparent"
                containerProps={{
                  className: "grid h-full",
                }}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div>
                <IconButton
                  variant="text"
                  className="rounded-full"
                  color={email ? "gray" : "blue-gray"}
                  disabled={!email}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
          </div>
        </div> */}
        {info ? (
          <Message info={info} chat={chat} handleChat={handleChat} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Dashboard;
