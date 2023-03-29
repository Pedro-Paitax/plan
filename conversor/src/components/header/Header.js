import jpIMG from "./github.png";
import React, { useState } from "react";
import "./Header.css";
import { Dropdown, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

function Header() {
  const user = {
    name: "Pedro Paitax",
    email: "paitax@proton.me",
    github: "https://github.com/pedro-paitax",
    projects: [
      {
        projeto1: [
          {
            name: "Conversor de Escala",
            description: "Conversor de Escala: Graus, Fahrenheit e Kelvin",
            link: "https://github.com/pedro-paitax/Conversor-de-Escala",
          },
        ],
        projeto2: [
          {
            name: "Calculadora Básica",
            description: "Calculadora Funcional",
            link: "https://github.com/pedro-paitax/Calculadora-Básica",
          },
        ],
        projeto3: [
          {
            name: "Média Escolar",
            description: "Calculadora De Média Aritimética Escolar",
            link: "https://github.com/pedro-paitax/Média-Escolar",
          },
        ],
        projeto4: [
          {
            name: " Controle de Gastos",
            description: "Calculadora de Controle de Gastos",
            link: "https://github.com/pedro-paitax/Controle-de-Gastos",
            image: "https://cdn-icons-png.flaticon.com/512/5899/5899792.png",
          },
        ],
      },
    ],
  };

  const items = [
    {
      label: (
        <a target="_blank" href={user.projects[0].projeto1[0].link}>
          {user.projects[0].projeto1[0].name}
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a target="_blank" href={user.projects[0].projeto2[0].link}>
          {user.projects[0].projeto2[0].name}
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a target="_blank" href={user.projects[0].projeto3[0].link}>
          {user.projects[0].projeto3[0].name}
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a target="_blank" href={user.projects[0].projeto4[0].link}>
          {user.projects[0].projeto4[0].name}
        </a>
      ),
      key: "3",
    },
  ];

  return (
    <>
      <div className="w-full rounded  mx-auto">
        <div className="shadow-xl bg-stone-900">
          <div className="flex items-center">
            <a rel="noreferrer" href={user.github} target="_blank">
              <img
                className="relative m-3 object-scale-down h-12 w-12"
                src={jpIMG}
                alt="Github"
              ></img>
            </a>
            <div className="grid grid-rows-2 ">
              <div className="me text-slate-300 items-center text-xl">My</div>
              <div className="me text-slate-300 items-center text-xl">
                GitHub
              </div>
            </div>
            <div className="ml-auto flex items-center">
              <div className="mx-5">
                <a className="me text-slate-300 items-center text-xl cursor-pointer" href="#" target="_blank">
                  Meu Portfólio
                </a>
              </div>
              <div className="mx-12">
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <a
                    className="me text-slate-300 items-center text-xl cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space className="me text-xl">
                      Mais projetos
                      <CaretDownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
