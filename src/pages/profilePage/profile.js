import { ProfileForm } from "../../components/profile-form";
import './profile-page.scss';
export const ProfilePage = () => {
    return (
        <div className="profile-page">
            <div className="profile-title">Profile</div>
            <ProfileForm/>
        </div>
        
    )
}