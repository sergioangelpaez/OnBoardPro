import React from "react";
import Container from "./Container";

const ClasificationTable = () => {
  return (
    <aside aria-labelledby="online-users">
      <Container>
        <h2 id="online-users" className="sr-only">
          Online Users
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/avatar.jpg"
                alt="Maren Maureen"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-medium">Maren Maureen</p>
                <p className="text-xs text-gray-500">1094882001</p>
              </div>
            </div>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </li>
        </ul>
      </Container>
    </aside>
  );
};

export default ClasificationTable;
