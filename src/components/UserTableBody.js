import CIcon from '@coreui/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

const UserTableBody = ({ email, phoneNumber, userType, id }) => {
  return (
    <tr>
      <td className="text-center">
        <div className="c-avatar">
          <img
            // src={'avatars/1.jpg'}
            src={`avatars/${id}.jpg`}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
          <span className="c-avatar-status bg-success"></span>
        </div>
      </td>
      <td>
        <div className="small text-muted">{email}</div>
      </td>
      <td className="text-center">
        <div>{phoneNumber}</div>
      </td>
      <td className="text-center">{userType}</td>
      <td className="text-center">
        <Link to={`/users/profile/1`}>
          <CIcon
            size={'xl'}
            className="text-info"
            title="view profile"
            content={`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`}
          />
        </Link>
      </td>
    </tr>
  );
};

export default UserTableBody;
