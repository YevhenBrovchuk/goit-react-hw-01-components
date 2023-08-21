
import { Description, ImgFoto, Name, Quantity, Stats, Li, Div } from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        
  <Div class="profile">
  <Description class="Description">
    <ImgFoto
    src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <Name class="name">{username}</Name>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </Description>

  <Stats class="stats">
    <Li>
      <span class="label">Followers</span>
      <Quantity class="quantity">{stats.followers}</Quantity>
    </Li>
    <Li>
      <span class="label">Views</span>
      <Quantity class="quantity">{stats.views}</Quantity>
    </Li>
    <Li>
      <span class="label">Likes</span>
      <Quantity class="quantity">{stats.likes}</Quantity>
    </Li>
  </Stats>
</Div>
    )



}