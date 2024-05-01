import React from "react";
import { Button, Input, Checkbox, Radio } from "@material-tailwind/react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

function Registerpage() {
  return (
    <Container
      maxWidth="md"
      className="mt-20 rounded-xl border p-5 border-gray-300 shadow-lg"
    >
      <h1 className="text-center text-6xl mb-5">BK OTT</h1>
      <Divider>
        <h3 className="text-center text-xl">Đăng ký</h3>
      </Divider>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-5">
        <div className="w-100 mx-5 my-5">
          <Input
            variant="standard"
            label="Email"
            placeholder="nguyenvana@gmail.com"
          />
        </div>
        <div className="grid grid-cols-2 w-100 mx-5 my-5">
          <Radio name="gender" label="Nam" />
          <Radio name="gender" label="Nữ" />
        </div>
        <div className="w-100 my-5 mx-5">
          <Input
            variant="standard"
            label="Mật khẩu"
            placeholder=".............."
          />
        </div>
        <div className="w-100 my-5 mx-5">
          <Input
            variant="standard"
            label="Ngày sinh"
            placeholder="01/01/1999"
            type="date"
          />
        </div>
        <div className="w-100 my-5 mx-5">
          <Input
            variant="standard"
            label="Nhắc lại mật khẩu"
            placeholder=".............."
          />
        </div>
        <div className="w-100 my-5 mx-5">
          <Input
            variant="standard"
            label="Số điện thoại"
            placeholder="0912345678"
          />
        </div>
        <div className="w-100 my-5 mx-5">
          <Button href="#" color="red" className="w-full">
            Hủy
          </Button>
        </div>
        <div className="w-100 my-5 mx-5">
          <Button href="#" color="indigo" className="w-full">
            Đăng ký
          </Button>
        </div>
      </div>
      <Divider className="mt-5 ">
        <Chip label="OR" size="small" />
      </Divider>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-5">
        <div className="w-100 my-5 mx-5">
          <Button href="#" color="indigo" className="w-full">
            Đã có tài khoản
          </Button>
        </div>
        <div className="w-100 my-5 mx-5">
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="flex items-center justify-center gap-3 w-full"
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Continue with Google
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Registerpage;
