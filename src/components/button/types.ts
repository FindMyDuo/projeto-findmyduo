import React from "react"

export interface iButton{
  buttonType: 'login' | 'register' | 'icons' | 'searchUser' | 'post' | 'userIcon';
  onClick: () => void;
  type: 'submit' | 'button';
  children: React.ReactElement | string; 
}