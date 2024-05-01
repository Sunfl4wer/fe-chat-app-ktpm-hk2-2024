import React from "react";
import { Button, Input } from "@material-tailwind/react";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Icon from "../assets/Icon";
function Loginpage() {
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1">
        <div className="h-screen lg:border-r-4">
          <div className="mt-20">
            <h1 className="text-center text-6xl mb-5">BK OTT</h1>
            <Divider>
              <h3 className="text-center text-xl">Đăng nhập</h3>
            </Divider>
            <form className="max-w-sm mx-auto">
              <div className="mb-5 mt-20">
                <Input
                  size="lg"
                  variant="outlined"
                  label="Email hoặc số điện thoại"
                  placeholder="nguyenvana@gmail.com"
                />
              </div>
              <div className="mb-5">
                <Input
                  size="lg"
                  variant="outlined"
                  label="Mật khẩu"
                  placeholder="Mật khẩu"
                />
              </div>
              <div className="mb-5 text-right">
                <div className="h-5">
                  <a href="#" className="text-right">
                    Quên mật khẩu
                  </a>
                </div>
              </div>
              <Button type="submit" color="indigo" className="w-full mb-5">
                Submit
              </Button>
            </form>
            <div className="max-w-sm mx-auto">
              <Divider className="mt-5 ">
                <Chip label="OR" size="small" />
              </Divider>
            </div>
            <div className="max-w-sm mx-auto mt-5">
              <Button href="#" color="indigo" className="w-full mb-5">
                Đăng ký
              </Button>
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
        </div>
        <div className="bg-gray-100 grid col-span-2 lg:block hidden h-screen">
          <div className="mx-auto" style={{ height: "700px", width: "700px" }}>
            <Icon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
