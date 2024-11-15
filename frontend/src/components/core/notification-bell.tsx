'use client'

// import { useEffect, useState } from 'react'
// import { Bell } from 'lucide-react';
// import { apiService, Notification } from '../services/api';

const NotificationBell: React.FC = () => {
  // const [notifications, setNotifications] = useState<Notification[]>([])
  // const [showNotifications, setShowNotifications] = useState(false)

  //   useEffect(() => {
  //     const fetchNotifications = async () => {
  //       const data = await apiService.getNotifications();
  //       setNotifications(data);
  //     };

  //     fetchNotifications();
  //     const interval = setInterval(fetchNotifications, 30000);
  //     return () => clearInterval(interval);
  //   }, []);

  //   const unreadCount = notifications.filter(n => !n.seen).length;

  //   const handleNotificationClick = async (notification: Notification) => {
  //     if (!notification.seen) {
  //       await apiService.markNotificationAsSeen(notification.id);
  //       setNotifications(notifications.map(n =>
  //         n.id === notification.id ? { ...n, seen: true } : n
  //       ));
  //     }
  //   };

  return (
    <div className='relative'>
      <button
        // onClick={() => setShowNotifications(!showNotifications)}
        className='relative p-2 hover:bg-gray-700 rounded-full'
      >
        {/* <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )} */}
      </button>

      {/* {showNotifications && (
        <div className='absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold mb-2'>Notifications</h3>
            <div className='space-y-2 max-h-96 overflow-y-auto'>
              {notifications.length > 0 ? (
                notifications.map(notification => (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification)}
                    className={`p-3 rounded-lg cursor-pointer ${
                      notification.seen ? 'bg-gray-50' : 'bg-blue-50'
                    }`}
                  >
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(notification.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">
                  No notifications
                </p>
              )}
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default NotificationBell
