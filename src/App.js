import './App.css';
import React from 'react';
import { Profile } from './Profile/Profile';

function App() {
  const a = 'Skander Borchani', b = 'I m 22 years old born in Tunisia i study computer science in the faculty of science in Tunisia. ' , c='Computer science student'
  ,d='https://scontent.ftun9-1.fna.fbcdn.net/v/t1.6435-1/p240x240/155024393_126652116030603_694760957692692695_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=FA_kSCOFF34AX_8ImnP&_nc_ht=scontent.ftun9-1.fna&oh=ee8b84f0165f1078df036f09013f52c3&oe=6194767D'
  return (
    <div>
      
      <Profile FullName={a} Bio={b} image={d} Profession={c}/>
    
  
    </div>
  );
}

export default App;
