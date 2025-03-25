import React, { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Settings</h1>
      <label className="flex items-center gap-2 mt-2">
        <input 
          type="checkbox" 
          checked={darkMode} 
          onChange={() => setDarkMode(!darkMode)} 
        />
        Dark Mode
      </label>
    </div>
  );
};

export default Settings;
