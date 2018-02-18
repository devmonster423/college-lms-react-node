import React from 'react';
import { connect } from 'react-redux';

//  Components
import NotificationItem from './NotificationItem';

const Notification = ({ notifications, home, notification }) => (
  <div>
    <h2>Notifications</h2>
    {notifications ? (
      notifications
        .filter((n, i) => (home && i < 3) || notification)
        .map(({ title, createdAt, tags, link, _id, file }) => (
          <div key={_id}>
            <NotificationItem
              title={title}
              createdAt={createdAt}
              tags={tags}
              link={link}
              file={file}
            />
          </div>
        ))
    ) : (
      <p> Loading... </p>
    )}
  </div>
);

const mapStateToProps = (state) => ({ notifications: state.notifications });
export default connect(mapStateToProps)(Notification);