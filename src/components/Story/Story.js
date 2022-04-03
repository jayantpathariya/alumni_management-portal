import React, { useState } from 'react';
import { images } from '../../assets';
import './story.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const storyImages = [
  'https://images.pexels.com/photos/935948/pexels-photo-935948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/5676678/pexels-photo-5676678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2335156/pexels-photo-2335156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Story = () => {
  return (
    <div className="story-container">
      <div className="story">
        <img
          className="story-img"
          src={
            'https://images.unsplash.com/photo-1505246053330-ecd82cf55f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
          }
          alt="story"
        />
        <div className="add-story-container">
          <AiOutlinePlusCircle className="add-story-icon" />
          <div className="add-story-text">Create Your Own Story</div>
        </div>
      </div>
      {storyImages.map((story, index) => {
        return (
          <div key={index} className="story">
            <img className="story-img" src={story} alt="story" />
          </div>
        );
      })}
    </div>
  );
};

export default Story;
