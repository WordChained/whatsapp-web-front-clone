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
  console.log("reducer is called");
  switch (action.type) {
    case "ADD_MESSAGE":
      const index = state.users.findIndex((user) => user.id === action.userId);
      let updatedState = JSON.parse(JSON.stringify(state));
      updatedState.users[index].messages.push(action.message);
      updatedState.currentUser = updatedState.users[index];
      return updatedState;
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.user,
      };
    default:
      return state;
  }
};
