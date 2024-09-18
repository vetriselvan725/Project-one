
import '../css/tasksharing.css';

const Tasksharing = () => {
  return (
    <div className="ts_1 main">
      <div className="ts_1_w">
      <div className="ts_2">
          <label>Task Sharing</label>
          
      </div>
     
     <div className="ts_3">
       <input type="text" className="ts_4" placeholder="Created by : @ Username"></input>
     </div>
     <div className="ts_5">
       <input type="text" className="ts_4" placeholder="Tagged staff : @ Username"></input>
     </div>
     <div className="ts_7">
       <input type="text" className="ts_4" placeholder="contributing staff : @ Username"></input>
     </div>
     <div className="ts_9">
     <label className="la_1">Task Name Instruction</label>
      </div>
     <div className="ts_10">
     <textarea  className="ts_11" rows="4" cols="56"></textarea>
      </div>      
      <div className="ts_14">
     <label className="la_1">History</label>
      </div>
     <div className="ts_15">
     <textarea  className="ts_11" rows="4" cols="56"></textarea>
      </div>
      <div className="ts_16">
        <div className="ts_17">
          <label className="la_1">Examination</label>
       </div>
       <div className="ts_18">
           <textarea  className="ts_11_re" rows="4" cols="26"></textarea>
        </div>
      </div>
     
      <div className="ts_20">
        <label className="la_1">Diagnosis</label>
      </div>
     <div className="ts_21">
     <textarea  className="ts_11_re" rows="4" cols="26"></textarea>
      </div>
      <div className="ts_23">
        <label className="la_1">Follow up</label>
      </div>
     <div className="ts_24">
     <textarea  className="ts_11" rows="4" cols="56"></textarea>
      </div>
      <div className="ts_23">
        <label className="la_1">Plan</label>
      </div>
     <div className="ts_24">
     <textarea  className="ts_11" rows="4" cols="56"></textarea>
      </div>
      <div className="ts_26">
        <label className="la_1">Post Consultation</label>
      </div>
     <div className="ts_27">
     <textarea  className="ts_11" rows="4" cols="56"></textarea>
      </div>
      <div className="ts_29">
        <label className="la_1">Feedback</label>
      </div>
     <div className="ts_30">
     <textarea  className="ts_11" rows="4" cols="56"></textarea>
      </div>
      <div className="ts_16">
        <div className="ts_32">
         <label className="la_1">key Learning point </label>
        </div>
        <div className="ts_33">
         <textarea  className="ts_11" rows="4" cols="26"></textarea>
        </div>
      </div>
      <div className="ts_35">
        <label className="la_1">Action</label>
      </div>
     <div className="ts_36">
     <textarea  className="ts_11" rows="4" cols="26" ></textarea>
      </div>
      <div  className="ts_16_c">
      <div  className="ts_16_a">
      <div className="ts_37">
        <button className="bu_1">Share</button>
      </div>
      </div>
      <div className="ts_16_b">
       <div className="ts_38">
       <input type="checkbox"  checked="checked"/>
       <label className="">Libray</label>
        </div>    
        
      </div>
      <div className="ts_40">
      <input type="checkbox" checked="checked"/>
      <label className="">Learn</label>
      </div>    
      </div>
      <div className="m_a">
       message about task during supervision/collaboration 
        </div>
        <div className="ts_42">
        <button className="bu_1">Complete</button>
      </div>
      </div>
      
      <div className="side_1">
          <div className="side_2">
              <label className="side_3">Learning</label>
          </div>
          <div className="side_4">
              <label className="side_5">Quiz</label>
          </div>
          <div className="side_6">
              <label className="side_7">date created</label>
          </div>
          <div className="side_6_bo">
             <div className="side_8">
                <label className="side_9">Key learning Points</label>
             </div>
             <div className="are_1">
               <textarea  className="are_2" rows="7" cols="57"></textarea>
             </div>
          <div className="side_10">
              <label className="side_11">Action</label>
          </div>
          <div className="are_3">
               <textarea  className="are_4" rows="7" cols="57" placeholder="Enter Answer"></textarea>
             </div>
             {/* <div>
             <img src="paris.jpg" alt="Paris" width="20" height="20"/>
             </div> */}
             <div className="side_10">
              <label className="side_11">Action</label>
          </div>
          <div className="are_3">
               <textarea  className="are_4" rows="7" cols="57" placeholder="CLICK TO REVEAL ANSWER"></textarea>
             </div>
            
          </div>
      </div>
    </div>
  );
}

export default Tasksharing;
