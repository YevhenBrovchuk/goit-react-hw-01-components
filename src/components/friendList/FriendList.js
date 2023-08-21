import { FriendListItem } from "components/friendListItem/FriendListItem";
import { Ul, Li } from "./FriendList.styled";
import PropTypes from "prop-types";

export const FriendList = ({items }) => {
    return (
       <Ul class="friend-list">
             {items.map(item => (
                    <Li key={item.id} class="item">
                     <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
                    </Li>
                ))}
</Ul> 
    )
}


