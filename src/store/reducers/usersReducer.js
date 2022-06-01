import { generateDiceBearAvatars } from "../../assets/data/randomImages";

export const InitialUsersState = {
  //messages are an array of messages between the current user and his contacts
  loggedInUser: {
    id: "54321",
    name: "Tal Ben David",
    profileImage: generateDiceBearAvatars(Math.random()),
  },
  users: [
    {
      id: "456",
      name: "Dov Dovidson",
      messages: [
        {
          id: "84563",
          message: "Hey man, how is it going?",
          sentAt: 1654077430272,
          senderId: "456",
        },
        {
          id: "652134",
          message: "Great! how about you??",
          sentAt: 1654077662370,
          senderId: "54321",
        },
      ],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
    {
      id: "6543",
      name: "kaaks asdkha da",
      messages: [],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
    {
      id: "23424",
      name: "kasjd ads jas",
      messages: [],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
    {
      id: "3463",
      name: "alsdja asd",
      messages: [],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
    {
      id: "2334",
      name: "rtawwd aw aa",
      messages: [],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
    {
      id: "7345",
      name: "ashsdw dasw",
      messages: [],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
    {
      id: "8543",
      name: "twef aw wwwqq",
      messages: [],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
    {
      id: "23625",
      name: "jga asdn",
      messages: [],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
    {
      id: "743653",
      name: "ayqwv wtrfr",
      messages: [],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
    {
      id: "354352",
      name: "3fagae",
      messages: [],
      profileImage: generateDiceBearAvatars(Math.random()),
    },
  ],
  currentUser: undefined,
};

export default (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      const idx = state.users.findIndex((user) => user.id === action.userId);
      const user = state.users.find((user) => user.id === action.userId);
      return {
        ...state,
        users: state.users.map((user, index) => {
          if (index === idx) user.messages = [...user.messages, action.message];
          return user;
        }),
        currentUser: {
          ...state.currentUser,
          messages: [...state.currentUser.messages, action.message],
        },
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.user,
      };
    default:
      return state;
  }
};
