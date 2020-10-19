import React, { useEffect, useState } from 'react';
import "./CommentSection.css"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { CommentDataStateTypes } from './CommentsReducer';

export interface commentDataTypes {
  __v: number;
  comment: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface commentTypes {
  comment: string;
  dateCreated: string;
}

let CommentSection = (): JSX.Element => {

 const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const response = await axios("https://peaceful-ocean-59292.herokuapp.com/Under120") // Put catch error here later
      const responseData = response.data;
      dispatch({ type: "ADD_COMMENTLIST", payload: responseData })
    })()
  }, [])

  const commentsData = useSelector<CommentDataStateTypes, CommentDataStateTypes["commentData"]>((state) => state.commentData)
  let DisplayComments: JSX.Element[] = commentsData.map((CommentInfo) => <Comment key={CommentInfo._id} comment={CommentInfo.comment} dateCreated={CommentInfo.createdAt} />)
  let amountOfComments = commentsData.length

  return <div className="CommentSection">
      <p className="AmountOfComments">{amountOfComments} Comments</p>
      <SendComment />
      {DisplayComments}
  </div>
}


let SendComment = () => {
  const [text, setText] = useState("");

  let textChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    evt.preventDefault()
    setText(evt.target.value)
  }

  let sendCommentInfo = async (): Promise<void> => {
    const commentToSend = { "comment": text }
    await axios.post('https://peaceful-ocean-59292.herokuapp.com/Under120/add', commentToSend)
    window.location.href = "/"
  }

  // Change "(e) => textChange(e)" to "textChange" which everything is compiled and works
  return <div className="SendComment">
    <div className="FlexRow">
      <img src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.30497-1/cp0/c18.0.60.60a/p60x60/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=rf0c5sOmIdkAX_wev0c&_nc_ht=scontent.fphx1-2.fna&_nc_tp=27&oh=acbd5ab3ac9220de16362831557c4f28&oe=5FA73D73" alt="Guest"/>
      <div className="FlexColumn">
        <input onChange={(e) => textChange(e)} type="text" placeholder="Add a public comment..."/>
        <a href="#?" onClick={sendCommentInfo}>Comment</a>
      </div>
    </div>
  </div>
}

let Comment = ({ comment, dateCreated }: commentTypes): JSX.Element => {
  let timeAgoText = timeAgo(new Date(dateCreated))

  return <div className="Comment">
    
    <div className="FlexRow">
      <img src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.30497-1/cp0/c18.0.60.60a/p60x60/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=rf0c5sOmIdkAX_wev0c&_nc_ht=scontent.fphx1-2.fna&_nc_tp=27&oh=acbd5ab3ac9220de16362831557c4f28&oe=5FA73D73" alt="Guest"/>
      <div className="FlexColumn">
        <h4>Guest <span>{timeAgoText}</span></h4>
        <p>{comment}</p>
      </div>
    </div>
    <hr/>
  </div>
}

const timeAgo = (prevDate: any): string => {
  const diff = Number(new Date()) - prevDate;
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;
  switch (true) {
      case diff < minute:
          const seconds = Math.round(diff / 1000);
           return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`
      case diff < hour:
          return Math.round(diff / minute) + ' minutes ago';
      case diff < day:
          return Math.round(diff / hour) + ' hours ago';
      case diff < month:
          return Math.round(diff / day) + ' days ago';
      case diff < year:
          return Math.round(diff / month) + ' months ago';
      case diff > year:
          return Math.round(diff / year) + ' years ago';
      default:
          return "";
  }
};

export default CommentSection;