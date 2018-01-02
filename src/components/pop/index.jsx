import React from 'react';
import './main.scss';

export function trainOverPop() {
  return (
    <div className="pop">
      训练结束，上传数据中
    </div>
  );
}

export function submitOverPop() {
  return (
    <div className="pop">
      数据上传完毕
      <br />
      再来一次？
      <br />
      返回配置
    </div>
  );
}

export default function pop({ trainOver, submitOver }) {
  if (trainOver) {
    return trainOverPop();
  }
  if (submitOver) {
    return submitOverPop();
  }
  return null;
}
