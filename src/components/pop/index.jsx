import React from 'react';
import './main.scss';

export function TrainOverPop() {
  return (
    <div className="pop">
      训练结束，上传数据中
    </div>
  );
}

export function SubmitOverPop({ enterTrain, enterSetting }) {
  return (
    <div className="pop">
      数据上传完毕
      <br />
      <button onClick={enterTrain}>再来一次？</button>
      <br />
      <button onClick={enterSetting}>返回配置</button>
    </div>
  );
}

export default function pop({
  trainOver,
  submitOver,
  actions,
}) {
  const { enterSetting, enterTrain } = actions;
  if (trainOver) {
    return (
      <TrainOverPop />
    );
  }
  if (submitOver) {
    return (
      <SubmitOverPop enterTrain={enterTrain} enterSetting={enterSetting} />
    );
  }
  return null;
}
