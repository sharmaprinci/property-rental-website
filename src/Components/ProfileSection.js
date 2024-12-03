import React, { useState } from 'react';

const ProfileSection = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || {});
  const [image, setImage] = useState(user.avatar || null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [imagePreview, setImagePreview] = useState(user.avatar || null); // State to hold the preview of the image

  // Function to check the current size of localStorage
  const getStorageSize = () => {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += (localStorage[key].length + key.length) * 2; // Estimate in bytes
      }
    }
    return total;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the uploaded image
        setImagePreview(reader.result); // Store the preview for displaying
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setImagePreview(user.avatar); // Reset preview when editing starts
    }
  };

  const handleSave = () => {
    // Check if name or email is empty
    if (!name || !email) {
      alert("Please fill out all fields.");
      return;
    }

    const updatedUser = { ...user, name, email, avatar: imagePreview };
    
    // Convert the object to a JSON string
    const userString = JSON.stringify(updatedUser);

    // Check size before saving
    const currentSize = getStorageSize(); // Get the current size of localStorage
    const newSize = userString.length * 2; // Estimate in bytes

    if (currentSize + newSize > 5 * 1024 * 1024) { // 5MB limit
      alert("Storage limit exceeded. Please clear some data.");
      return;
    }

    setUser(updatedUser);
    localStorage.setItem('user', userString);
    setIsEditing(false);
    setIsProfileUpdated(true);
    setImage(null); // Clear the image to prevent further edits
    setImagePreview(updatedUser.avatar); // Keep the updated preview
  };

  return (
    <div className="profile-section">
      <h3>Profile</h3>
      <div className="profile-details">
        <div className="avatar-container" style={{ position: 'relative' }}>
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="User Avatar"
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '50%', // Circular image
              }}
            />
          ) : (
            <div className="avatar-placeholder">No Image</div>
          )}
        </div>

        {isEditing && (
          <>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </>
        )}

        {isEditing ? (
          <div>
            <input
              className='input-field'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name" style={{ marginTop: "1rem" }}
            />
            <input
              className='input-field'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            /><br />
            <button className="btn save-btn" onClick={handleSave}>Save</button>
            <button className="btn cancel-btn" onClick={handleEditToggle}>Cancel</button>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {!isProfileUpdated && <button className="btn edit-btn" onClick={handleEditToggle}>Edit Profile</button>}
            {isProfileUpdated && alert("Profile updated successfully!")}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
