import { generateDiceBearAvatars } from "../../assets/data/randomImages";

const getRandomImage = async () => {
  let result
  try {
    result = await new Promise((resolve, reject) => {
      resolve(generateDiceBearAvatars(Math.random()))
    })
  } catch (error) {
    result = undefined
  }
  if (Object.keys(result).length === 0) return undefined
  return result
}
export const InitialUsersState = {
  //messages are an array of messages between the current user and his contacts
  loggedInUser: {
    id: "54321",
    name: "Tal Ben David",
    profileImage: getRandomImage(),
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
      profileImage: getRandomImage(),
    },
    {
      id: "6543",
      name: "kaaks asdkha da",
      messages: [],
      profileImage: getRandomImage(),
    },
    {
      id: "23424",
      name: "kasjd ads jas",
      messages: [],
      profileImage: getRandomImage(),
    },
    {
      id: "3463",
      name: "alsdja asd",
      messages: [],
      profileImage: getRandomImage(),
    },
    {
      id: "2334",
      name: "rtawwd aw aa",
      messages: [],
      profileImage: getRandomImage(),
    },
    {
      id: "7345",
      name: "ashsdw dasw",
      messages: [],
      profileImage: getRandomImage(),
    },
    {
      id: "8543",
      name: "twef aw wwwqq",
      messages: [],
      profileImage: getRandomImage(),
    },
    {
      id: "23625",
      name: "jga asdn",
      messages: [],
      profileImage: getRandomImage(),
    },
    {
      id: "743653",
      name: "ayqwv wtrfr",
      messages: [],
      profileImage: getRandomImage(),
    },
    {
      id: "354352",
      name: "3fagae",
      messages: [],
      profileImage: getRandomImage(),
    },
  ],
  currentUser: undefined,
};

export default (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      const index = state.users.findIndex((user) => user.id === action.userId);
      let updatedState = JSON.parse(JSON.stringify(state));
      updatedState.users[index].messages.push(action.message);
      updatedState.currentUser.messages = updatedState.users[index].messages;
      updatedState.users.sort((a, b) => {
        if (!a.messages.length) return 1
        else if (!b.messages.length) return -1
        return b.messages[b.messages.length - 1].sentAt - a.messages[a.messages.length - 1].sentAt
      })
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
