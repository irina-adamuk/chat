import { ProfileForm } from "../../components/profile-form";
import { AsideHeader } from "../../components";
import { ProfileTab } from "../../components/profile-tab";

import "./profile-page.scss";
import { useSelector} from "react-redux";

export const ProfilePage = () => {
  const profile = useSelector((state) => state.profile);
  console.log(profile);

  return (
    <div className="profile-page">
      <aside className="aside-bar">
        <AsideHeader />
         { profile.isVisibleProfile &&         
						<ProfileTab
						profile={profile}
        	/>
					}
      </aside>
      <div className="content-box">
        <div className="profile-wrapper">
          <div className="profile-title">Edit Profile</div>
          <ProfileForm
            firstName={profile.firstName}
            lastName={profile.lastName}
            userName={profile.userName}
            city={profile.city}
            description={profile.description}
            avatarUrl={profile.avatarUrl}
          />
        </div>
      </div>
    </div>
  );
};
