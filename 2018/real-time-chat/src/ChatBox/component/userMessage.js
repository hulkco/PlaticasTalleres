import React, { Component } from 'react'

const UserMessage = (props) => (
  <div className='container'>
    <p>{props.message}</p>
    <span className='time-right'>{props.username}</span>
    <style jsx>{`
          .messageBox {
            width: 100%;
            height: 100%;
          }
          p {
            font-size: large;
            margin-left: 20px;
          }
          .container {
             clear: both;
              border-radius: 20px;
              margin-bottom: 2px;
              width: 97%;
              display:inline-block;
              list-style:none;
              margin-top: 10px;
              margin-left: 18px;
              margin-right: 18px;
              float: right;
              background: #e8e7d2;
              font-family: Helvetica, Arial, sans-serif;
          }
          .time-right {
            float: right;
            color: #f49320;
            margin-right: 20px;
            margin-bottom: 10px;
          }
          .container::after {
              content: "";
              clear: both;
              display: table;
          }

          .container img {
              float: left;
              max-width: 60px;
              width: 100%;
              margin-right: 20px;
              border-radius: 50%;
          }
        `}
    </style>
  </div>
)

export default UserMessage