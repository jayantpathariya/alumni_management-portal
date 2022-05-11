import React from 'react';
import './messageList.scss';
import SendIcon from '@mui/icons-material/Send';

const list = [
  {
    grpImage:
      'https://media.istockphoto.com/photos/beautiful-smiling-female-college-student-picture-id1340766096?b=1&k=20&m=1340766096&s=170667a&w=0&h=P-ay9mgiAn5O_eg3JOfaKIpDTu-_p70NyIsEhVcEFco=',
    grpName: 'Group Name',
    lastMessage: 'Hello guys',
    notificationNo: '1',
  },
  {
    grpImage:
      'https://m.economictimes.com/thumb/height-450,width-600,imgsize-571225,msid-75757932/not-just-scientists-students-are-also-fighting-covid-19-.jpg',
    grpName: 'Group Name 2',
    lastMessage: 'Good morning!!!',
    notificationNo: '3',
  },
  {
    grpImage:
      'https://thumbs.dreamstime.com/b/group-diverse-young-students-standing-together-classroom-156212396.jpg',
    grpName: 'Group Name 3',
    lastMessage: 'How was your day?',
    notificationNo: '2',
  },
  {
    grpImage:
      'https://cdn.pixabay.com/photo/2019/07/02/07/38/student-4311732__340.jpg',
    grpName: 'Group Name 4',
    lastMessage: "Let's go to the movie😍",
    notificationNo: '6',
  },
  {
    grpImage:
      'https://media.istockphoto.com/photos/happy-black-student-raising-arm-to-answer-question-while-attending-picture-id1307457391?b=1&k=20&m=1307457391&s=170667a&w=0&h=IKe362OSxjbBcLln6L-Vmi0QCyc7XL95U2DbeoyvNUE=',
    grpName: 'Group Name 5',
    lastMessage: 'Can you send me the notes?',
    notificationNo: '14',
  },
];

const MessageList = ({ own }) => {
  return (
    <div className="message-list-container">
      <div className="message-list-content">
        <div className="msg-container">
          <div className="msg-header">
            <div className="msg-header-con">
              <img
                src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                alt="user"
              />
              <div className="msg-header-content">
                <h3 className="user-name">Jayant</h3>
                <p className="user-status">Team Lead | Wipro</p>
              </div>
            </div>
          </div>
          <div className="msg-body">
            <div className="chatBoxTop">
              <div className="msg">
                <div className="msgTop">
                  <img
                    className="messageImg"
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <p className="msgText">Hello this is message</p>
                </div>
                <div className="msgBottom">1 hour ago</div>
              </div>
              <div className="msg own">
                <div className="msgTop">
                  <img
                    className="messageImg"
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <p className="msgText">Hello this is message</p>
                </div>
                <div className="msgBottom">1 hour ago</div>
              </div>
              <div className="msg">
                <div className="msgTop">
                  <img
                    className="messageImg"
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <p className="msgText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium molestias natus reiciendis pariatur eveniet
                    recusandae iusto nemo distinctio! Doloribus eius obcaecati
                    amet dolore earum et harum ut sed ad corrupti!
                  </p>
                </div>
                <div className="msgBottom">1 hour ago</div>
              </div>
            </div>
            <div className="chatBoxBottom"></div>
          </div>
          <div className="msg-send">
            <input type="text" placeholder="Message" />
            <button>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;
{
  /* {list.map((item, index) => {
          return (
            <div key={index} className="message-container">
              <div className="message-content">
                <div className="message-image-container">
                  <img src={item.grpImage} alt="group" />
                  <div className="online-dot"></div>
                </div>
                <div className="message-content">
                  <div className="message-name">{item.grpName}</div>
                  <div className="message-last-message">{item.lastMessage}</div>
                </div>
              </div>
              <div className="message-notification-no">
                {item.notificationNo}
              </div>
            </div>
          );
        })} */
}
