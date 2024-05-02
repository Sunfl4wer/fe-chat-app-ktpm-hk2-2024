import React, { useEffect } from "react";
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
import axios from "axios";
const Chatlist = ({ page, index, handleIndex, handleChat, handleInfo }) => {
  Chatlist.propTypes = {
    page: PropTypes.any,
    index: PropTypes.any,
    handleIndex: PropTypes.func,
    handleChat: PropTypes.func,
    handleInfo: PropTypes.func,
  };
  const loadChatList = () => {
    page;
  };
  const [imageUrl, setImageUrl] = React.useState(null);

  const handleChatIndex = (index) => {
    handleIndex(index);
    var chat = "";
    handleChat(chat);
    handleInfo(chat);
  };
  return (
    <>
      <div className="m-4 grid grid-cols-6">
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
      <div
        className={
          index === 0
            ? "grid grid-cols-4 w-100 p-3 bg-blue-gray-100 transition-transform "
            : "grid grid-cols-4 w-100 p-3  hover:bg-gray-200 transition-transform "
        }
        onClick={() => handleChatIndex(0)}
      >
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
              <Typography variant="small" color="gray" className="font-normal">
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
              <Typography variant="small" color="gray" className="font-normal">
                Hello
              </Typography>
            </div>
            <div className="grid justify-end">
              <NotificationsOffIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatlist;
