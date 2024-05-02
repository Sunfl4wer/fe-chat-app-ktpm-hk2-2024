import React from "react";
import PropTypes from "prop-types";
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
  ButtonGroup,
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
import CallIcon from "@mui/icons-material/Call";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import SearchIcon from "@mui/icons-material/Search";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { FileInput } from "flowbite-react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
function Message({ info, chat }) {
  Message.propTypes = {
    info: PropTypes.any,
    chat: PropTypes.any,
  };
  const messagesEndRef = React.useRef();
  const [input, setInput] = React.useState("");
  const onChange = ({ target }) => setInput(target.value);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(!open1);
  const inputFileRef = React.useRef(null);
  const addIcon = (emoji) => {
    if (input instanceof File) {
      setInput(emoji);
    } else {
      if (input) {
        setInput((prev) => prev + emoji);
      } else {
        setInput(emoji);
      }
      console.log(input);
    }
  };
  const handleButtonClick = () => {
    // trigger the click event of the input file
    inputFileRef.current.click();
  };
  const chatList = (
    <>
      <div className="mt-5 grid grid-cols-1 gap-10">
        <Card
          color="transparent"
          shadow={false}
          className="w-full bg-[#e5efff] right-0 justify-self-end border-2 max-w-[40rem]"
        >
          <CardBody className="p-3">
            <Typography>
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
            </Typography>
            <Typography className="">12:45</Typography>
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
              <img
                src="http://localhost:8080/chatapp/api/media/download/9"
                alt="Chat"
              />
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
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
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
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
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
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
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
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
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
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
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
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
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
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
            </Typography>
            <Typography>12:45</Typography>
          </CardBody>
        </Card>
      </div>
    </>
  );
  React.useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  }, []);
  return (
    <>
      <div className="row-span-1 grid grid-cols-2 border-b-2">
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
              <MoreHorizIcon onClick={handleOpen1} />
            </IconButton>
          </div>
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
                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                    alt="avatar"
                    size="xl"
                  />
                  <Typography
                    className="text-right mt-10 col-span-2"
                    variant="h5"
                  >
                    Tania Andrew
                  </Typography>
                </div>
              </div>
            </div>
            <div className="p-4">
              <Typography variant="h6">Thông tin cá nhân</Typography>
              <div className="grid grid-cols-3 gap-4 my-3 text-left">
                <Typography variant="small">Giới tính</Typography>
                <Typography className="col-span-2" variant="small">
                  Nam
                </Typography>
              </div>
              <div className="grid grid-cols-3 gap-4 my-3 text-left">
                <Typography variant="small">Ngày sinh</Typography>
                <Typography className="col-span-2" variant="small">
                  01 tháng 01 năm 2000
                </Typography>
              </div>
              <div className="grid grid-cols-3 gap-4 my-3 text-left">
                <Typography variant="small">Số điện thoại</Typography>
                <Typography className="col-span-2" variant="small">
                  0912345678
                </Typography>
              </div>
            </div>
            <Divider />
          </DialogBody>
        </Dialog>
      </div>
      <div className="row-span-8 overflow-y-scroll">
        <div className="mx-auto bottom-0 right-0 mb-5" style={{ width: "90%" }}>
          {chatList}
        </div>
      </div>
      <div className="row-span-1 align-bottom">
        <div className="mx-auto" style={{ width: "90%" }}>
          <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-1">
            <div className="flex">
              <IconButton
                variant="text"
                className="rounded-full"
                onClick={handleButtonClick}
              >
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
              <input
                type="file"
                className="hidden invisible"
                ref={inputFileRef}
                onChange={(event) => {
                  const file = event.target.files[0];
                  setInput(event.target.files[0]);
                }}
              />
              <Popover placement="top-start">
                <PopoverHandler>
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
                </PopoverHandler>
                <PopoverContent>
                  <ButtonGroup variant="text">
                    <Button
                      style={{ fontSize: "1.5rem" }}
                      className="hover:bg-red-900"
                      onClick={() => addIcon("😡")}
                    >
                      😡
                    </Button>
                    <Button
                      style={{ fontSize: "1.5rem" }}
                      className="hover:bg-blue-900"
                      onClick={() => addIcon("😢")}
                    >
                      😢
                    </Button>
                    <Button
                      style={{ fontSize: "1.5rem" }}
                      className="hover:bg-yellow-900"
                      onClick={() => addIcon("🤣")}
                    >
                      🤣
                    </Button>
                    <Button
                      className="hover:bg-blue-500 hover:text-white"
                      onClick={() => addIcon("👍")}
                    >
                      <ThumbUpIcon />
                    </Button>
                    <Button
                      onClick={() => addIcon("❤️")}
                      className="hover:text-pink-600 hover:bg-red-100"
                    >
                      <FavoriteIcon />
                    </Button>
                  </ButtonGroup>
                </PopoverContent>
              </Popover>
            </div>
            <Textarea
              rows={1}
              resize={true}
              autoComplete="off"
              onChange={onChange}
              placeholder={input ? input.name : "Nhập tin nhắn"}
              value={input instanceof File ? input.name : input}
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
                color={input ? "gray" : "blue-gray"}
                disabled={!input}
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
      </div>
    </>
  );
}

export default Message;
