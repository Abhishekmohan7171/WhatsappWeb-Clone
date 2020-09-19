import React,{useEffect,useState} from 'react'
import { Avatar,IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined, Unsubscribe } from "@material-ui/icons";
import SidebarChat from './SidebarChat';

import './Sidebar.css'
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const[rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(()=> {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,data: doc.data()
            })))
        });

        return () => {
            unsubscribe();
        }
    },[]);

  
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                     <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                     <ChatIcon />
                    </IconButton>
                    <IconButton>
                     <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className='sidebar__searchContainer'>
                <SearchOutlined />
                <input placeholder="Search or start new Chat" type="text" />
                </div>
                
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map((rooms)=>(
                    <SidebarChat key={rooms.id} id={rooms.id} name={rooms.data.name} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar
