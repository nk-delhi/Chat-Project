import {PrettyChatWindow} from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='36a2cdef-0733-4a94-b6a1-f4439c0be898'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
</div>
    )
}
export default ChatsPage