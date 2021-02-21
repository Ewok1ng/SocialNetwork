let renderEntireTree

let state = {
  profilePage: {
    profileImage: 'https://i.pinimg.com/originals/c6/70/a8/c670a847963dd4d0f06d63a97a83142e.png',
    postsData: [
      {
        id: 1,
        text: 'Feel the power of the dark side',
        likesCount: 501
      },
      {
        id: 2,
        text: 'Hmm?',
        likesCount: 666
      }
    ],
    newPostText: ''
  },
  messagesPage: {
    messageData: [
      {
        id: 1,
        image: 'https://i.pinimg.com/originals/c6/70/a8/c670a847963dd4d0f06d63a97a83142e.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        name: 'Darth Vader'
      },
      {
        id: 2,
        image: 'https://cdn.dribbble.com/users/2478326/screenshots/8910581/baby-yoda-dribbble.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        name: 'Grogu'
      },
      {
        id: 3,
        image: 'https://i.pinimg.com/originals/c6/70/a8/c670a847963dd4d0f06d63a97a83142e.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        name: 'Darth Vader'
      },
      {
        id: 4,
        image: 'https://cdn.dribbble.com/users/2478326/screenshots/8910581/baby-yoda-dribbble.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        name: 'Grogu'
      },
    ],
    messageListData: [
      {id: 1, name: 'Darth Vader'},
      {id: 2, name: 'Kenobi'},
      {id: 3, name: 'Master Yoda'},
      {id: 4, name: 'Luke Skywalker'},
    ],
    newMessage: ''
  }
}

export let updateNewPostTest = (newText) => {
  state.profilePage.newPostText = newText
  renderEntireTree(state)
}

export let addPost = () => {
  let newPost = {
    id: state.profilePage.postsData.length + 1,
    image: state.profilePage.profileImage,
    text: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.postsData.push(newPost)
  state.profilePage.newPostText = ''
  renderEntireTree(state)
}

export let updateMessage = (newMessage) => {
  state.messagesPage.newMessage = newMessage
  renderEntireTree(state)
}

export let addMessage = () => {
  let newMessage = {
    id: 4,
    image: 'https://i.pinimg.com/originals/c6/70/a8/c670a847963dd4d0f06d63a97a83142e.png',
    text: state.messagesPage.newMessage,
    name: 'Darth Vader'
  }
  state.messagesPage.messageData.push(newMessage)
  state.messagesPage.newMessage = ''
  renderEntireTree(state)
}

export const subscribe= (observer) => {
  renderEntireTree = observer
}

export default state