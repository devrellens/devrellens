import { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import { summon_reward } from '../utils/summon';

const questionList = [
    {id: 'q1',question:'The Profile NFT is the main object in the Lens Protocol.',answer:true},
    {id: 'q2',question:'Is mutlisig allowed to burn any follower or collect NFTs?',answer:false},
    {id: 'q3',question:'The multisig will be able to authorize the whitelisting assets.',answer:true},
    {id: 'q4',question:'The three primary types of publication include; posts, comments, and shares.',answer:false},
    {id: 'q5',question:'Mirrors are the curation tool of the Lens Protocol.',answer:true},
    {id: 'q6',question:'Comments live in the user Profile NFT and therefore are wholly owned by the server.',answer:false},
    {id: 'q7',question:'All NFTs should not mint a token with tokenId==0 in any circumstance.',answer:true},
    {id: 'q8',question:'"Following" on the Lens Protocol is same as following in Web2 social applications.',answer:false},
    {id: 'q9',question:'The ID of each newly issued Follow NFT for given profile increments by 1.',answer:true},
    {id: 'q10',question:'You will have 30 days to claim your profile once you have been whitelisted.',answer:false},
];

export default function Home() {
    return (
    <div>
      <h1>Lens Quiz</h1>
      <Formik
        initialValues={{
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          //alert(JSON.stringify(values, null, 2));
          //alert(calcScore(values));
          if (calcScore(values)>6) {
            // unlock achievement
            summon_reward('0xDeD614342D9C88aF0242D9C9a13224A105342076','quiz_passed','358367398093389910')
            alert("Scored 70% or higher, achievement unlocked to Summon");
          }
          else {
            alert("Scored under 70%, please try again");
          }
        }}
      >
        {({ values }) => (
          <Form>
            {questionList.map(question => displayQuestion(question['id'],question['question']))}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
    );
}

const displayQuestion = (id,question) => {
    return (
        <>
        <div id={id}>{question}</div>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name={id} value="1" />
            True
          </label>
          <label>
            <Field type="radio" name={id} value="0" />
            False
          </label>
        </div>
        </>
    );
}

const buildQuestionKey = () => {
    const result={};
    questionList.forEach(question => {
        const qid=question['id'];
        result[qid]={
            id: qid,
            question: question['question'],
            answer: question['answer'],
        };
    });
    return result;
    
}
const calcScore = (responses) => {
    const questionKey=buildQuestionKey();
    let score=0;
    for (let qid in responses) {
        console.log(responses[qid],questionKey[qid]['answer'], responses[qid]==questionKey[qid]['answer']);
        if (responses[qid]==questionKey[qid]['answer']) { // Text comparison truthy
            score++;
        }
    }
    return score;
}

