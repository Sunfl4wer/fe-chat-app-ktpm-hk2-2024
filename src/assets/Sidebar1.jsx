import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import "material-icons/iconfont/material-icons.css";
function Sidebar1() {
  const url = window.location.pathname.split("/")[1];
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src="https://yt3.googleusercontent.com/qscxOZerbbVIHzOCX39sZXUOoh3SrZt7wY8VUfGhPi_1kdnegkPe2KJils2h_HWngwz0ETOp=s900-c-k-c0x00ffffff-no-rj"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          style={{ borderRadius: "50%" }}
        />
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </form>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://yt3.googleusercontent.com/qscxOZerbbVIHzOCX39sZXUOoh3SrZt7wY8VUfGhPi_1kdnegkPe2KJils2h_HWngwz0ETOp=s900-c-k-c0x00ffffff-no-rj"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <a href="/profile" className="block text-sm">
              Bonnie Green
            </a>
          </Dropdown.Header>
          <Dropdown.Item href="/profile/post">Posts</Dropdown.Item>
          <Dropdown.Item href="/profile/friend">Friends</Dropdown.Item>
          <Dropdown.Item href="/profile/info">My info</Dropdown.Item>
          <Dropdown.Item href="/profile/privacy">Privacy</Dropdown.Item>
          <Dropdown.Item href="/profile/passwood">Password</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {url === "home" ? (
          <Navbar.Link href="/home" active>
            <i className="material-icons" aria-hidden="true">
              home
            </i>
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/home">
            <i className="material-icons" aria-hidden="true">
              home
            </i>
          </Navbar.Link>
        )}
        {url === "notification" ? (
          <Navbar.Link href="/notification" active>
            <i className="material-icons" aria-hidden="true">
              notifications
            </i>
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/notification">
            <i className="material-icons" aria-hidden="true">
              notifications
            </i>
          </Navbar.Link>
        )}
        {url === "/message" ? (
          <Navbar.Link href="/message" active>
            <i className="material-icons" aria-hidden="true">
              mark_chat_read
            </i>
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/message">
            <i className="material-icons" aria-hidden="true">
              mark_chat_read
            </i>
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar1;
