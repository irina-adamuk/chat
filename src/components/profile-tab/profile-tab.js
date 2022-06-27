import "./profile-tab.scss";

export const ProfileTab = ({profile}) => {
const isEmpt = (prof) => {
	for(let k in prof) {
	  if (prof[k] !== ""){
		  return false;
	  }
	  return true;
	}
}

  return (
		<div className="profile-tab-wrapper">
			<div className="profile-tab">
				{isEmpt(profile) && <div className='profile-desc'>Profile is empty</div>}
				{profile.avatarUrl!=="" && <img className="profile-avatar" src={profile.avatarUrl} alt="avatar"/>}
				{profile.city!=="" && <div className='profile-desc'><div>г. </div>{profile.city}</div>}
				{profile.lastName !=="" && <div className='profile-desc'><div>фамилия: </div>{profile.lastName}</div>}
				{profile.firstName !=="" && <div className='profile-desc'><div>имя: </div>{profile.firstName}</div>}
				{profile.userName !== "" && <div className='profile-desc'><div>ник: </div>{profile.userName}</div>}
				{profile.firstName !== "" && <div className='profile-desc'><div>дата рождения: </div>{profile.dateOfBirth}</div>}
				{profile.description !=="" && <div className='profile-subdesc'><div>о себе: </div>{profile.description}</div>}
			</div>
		</div>
	);
};
