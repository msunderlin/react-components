import React from 'react';

import ReactDOM from 'react-dom';

import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App=()=>{
    return (
        <div className="ui container comments">
        <ApprovalCard><div>
            <h4>Warning</h4>
        </div>
            Are you sure you want to do this?
        </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    comment="This is a comment 1 " 
                    timeago="Today at 4:45PM" 
                    avatar={faker.image.avatar()}
                />  
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Steve" 
                comment="This is a comment 2"
                timeago="Today at 2:05AM"
                avatar={faker.image.avatar()}
            /> 
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="John" 
                comment="This is a comment 5"
                timeago="Yesterday at 6:30PM"
                avatar={faker.image.avatar()}
            />
             </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);