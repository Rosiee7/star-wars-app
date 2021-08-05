import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Button } from 'antd';
import {
  VideoCameraOutlined 
} from '@ant-design/icons';
import { AnyCnameRecord } from 'dns';

const MoviesNav = ({movies}:any) => {  
  console.log(2);
    return (
      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
        >
          {movies.map((movie:any, index:number)=>{
            return <Menu.Item key={index} icon={<VideoCameraOutlined />}>
                    {movie.title}
                  </Menu.Item>
          })}
{/* 
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item> */}
        </Menu>
      </div>
    );
  }

export default MoviesNav;