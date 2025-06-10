export const menus = [
  {
   label: "Home",
   to: "/",
  },
  {
    "label": "Dashboard",
    "to": "/dashboard"
  },
  {
    "label": "Profile",
    "to": "/profile",
    "children": [
      {
        "label": "View Profile",
        "to": "/profile/view"
      },
      {
        "label": "Edit Profile",
        "to": "/profile/edit"
      },
      {
        "label": "Account logout",
        "to": "/logout"
      }
    ]
  },
  {
    "label": "Settings",
    "to": "/settings",
    "children": [
      {
        "label": "Account Settings",
        "to": "/settings/account"
      },
      {
        "label": "Privacy Settings",
        "to": "/settings/privacy"
      },
      {
        "label": "Notifications",
        "to": "/settings/notifications",
        "children": [
          {
            "label": "Email",
            "to": "/settings/notifications/email"
          },
          {
            "label": "SMS",
            "to": "/settings/notifications/sms"
          }
        ]
      }
    ]
  }
];

export default menus;
