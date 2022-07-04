/* routing 매핑 시 client 쪽의 url과 프로토콜 메소드를 사용
   GET(조회): router.get()
   POST(저장): router.post()
   PUT(수정): router.put()
   DELETE(삭제): router.delete() */

/* CORS(Cross-Origin Resource Sharing)
   자신이 속하지 않은 다른 도메인, 다른 프로토콜, 혹은 다른 포트에 있는 리소스를 요청하는 cross-origin HTTP 요청 방식
   이거 설정을 안하면, front와 통신 주고 받다가, 외부 서버에서 통신 주고 받다보면 CORS error가 발생 */
var http = require("http");
var cors = require("cors");
var express = require("express");

const router = express.Router();
const app = express();
const server = http.createServer(app);
const PORT = 8088;

// 비지니스 로직은 controller를 바로보도록
var index = require("../controllers/index");

// 1. 모든 도메인 허용
app.use(cors());

// 2. 특정 도메인만 허용
/* let corsOptions = {
     orgin: 'http://yourdomain.com',
     credentials: true
}
app.use(cors(corsOptions));
*/
server.listen(PORT, () => {
  console.log("CORS(Cross-Origin Resource Sharing) running on " + PORT);
});

/* mybatis query */
router.get("/hello", index.greeting);
router.get("/", index.getAllUsers);
router.get("/:id", index.getUser);

module.exports = router;
