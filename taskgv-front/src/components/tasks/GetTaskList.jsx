import React, {useContext} from 'react'
import AuthContext from "../../context/AuthProvider"
// import axios from 'axios'


const GetTasksList = () => {
    const { auth } = useContext(AuthContext);
    // console.log(`Bearer ${auth.jwt}`)
    console.log(auth.jwt)
    // const config = {
    // method: 'get',
    // url: 'http://localhost:5000/api/tasks/user',
//    withCredentials: true,
//   headers: {'Cookie': 'jwt-token=?'} 
// headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

// headers: { 
// 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3MiOnsidXNlcklkIjpbOV0sInVzZXJFbWFpbCI6IjJiZW5kZXI1OTlAZ2dvby5jb20ifSwidXNlckF1dGhvcml0aWVzIjp7ImlzQWRtaW4iOlsxXSwiaXNQcm9qZWN0T3duZXIiOlsxLDIsMjksMzAsMzIsNDMsNDQsNDUsNDYsNDcsNDgsNTEsNTIsNTMsNTQsNTUsNTYsNTksNjAsNjEsNjIsNjMsNjQsNjUsNjYsNjcsNjgsNjksNzAsNzEsNzJdLCJpc1Byb2plY3RPd25lclRhc2tzIjpbMSwyLDNdLCJpc1Byb2plY3RBdHRlbmRlZSI6WzNdLCJpc1Rhc2tIb2xkZXIiOls0XX0sImlhdCI6MTY1NDk1ODkyMSwiZXhwIjoxNjU5Mjc4OTIxfQ.KlR418oQ1HX_tx95mQvq59LWu-4zWGjyXJV9WHLZub8'
// }
//     headers: { 
//     'Authorization': `Bearer ${auth.jwt}`
//     // }
// };

// let tasks = ''
// axios(config)
// .then((response) => {
//     tasks = (JSON.stringify(response.data))
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

return (
    <div>
    coucou
    </div>
)
}

export default GetTasksList

