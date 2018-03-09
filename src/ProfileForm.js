import React from 'react';

const ProfileInfo = ({username, firstName, lastName, email, handleSubmit, handleChange}) => (
  <form className="column" onSubmit={handleSubmit}>
    <label> User name:
      <input name='username' value={username} onChange={handleChange}/>
    </label>
    <label> First name:
      <input name='firstName' type="text" value={firstName} onChange={handleChange}/>
    </label>
    <label> Last name:
      <input name='lastName' type="text" value={lastName} onChange={handleChange}/>
    </label>
    <label> E-mail:
      <input name='email' type="email" value={email} onChange={handleChange}/>
    </label>
    <input type="submit" value="Submit" />
  </form>
)

export default ProfileInfo;
