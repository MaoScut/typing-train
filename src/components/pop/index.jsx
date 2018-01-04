import React from 'react';
import './main.scss';

function TrainOverPop() {
  return (
    <div className="pop">
      训练结束，上传数据中
    </div>
  );
}

function SubmitOverPop({ enterTrain, enterSetting }) {
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
  showTrainOverPop,
  showSubmitOverPop,
  actions,
}) {
  const { enterSetting, enterTrain } = actions;
  if (showTrainOverPop) {
    return (
      <TrainOverPop />
    );
  }
  if (showSubmitOverPop) {
    return (
      <SubmitOverPop enterTrain={enterTrain} enterSetting={enterSetting} />
    );
  }
  return null;
}
