/* routing 매핑 시 client 쪽의 url과 프로토콜 메소드를 사용
   GET(조회): router.get()
   POST(저장): router.post()
   PUT(수정): router.put()
   DELETE(삭제): router.delete() */

/* mybatis $ npm i mybatis-mapper */
const mybatisMapper = require('mybatis-mapper');
/* 주의점 : 경로가 현재위치의 상대경로가 아니라 최상위 app.js 가 있는 경로를 기준으로 해야 에러가 안남 */
mybatisMapper.createMapper(['./models/mybatis/testMapper.xml'])

/* mybatis query */
var format = {language: 'sql', indent: ' '}
var mysql = require('../config/mysql/db');

module.exports = {

    greeting: function(req, res, next) {
        res.render('index', { title: 'Express' });
    },

    getAllUsers: function(req, res, next) {
        var param = {
            id : req.params.id
        }
        /* param 1) xml의 name값, 2) 해당 xml의 id값, 3) 파라미터, 4) 포맷값 */
        var query = mybatisMapper.getStatement('sqlMapper', 'getAllQuery', param, format)
        mysql.query(query, (error, rows) => {
            console.log(error);
            console.log(rows);
            // res.send(rows);
            res.json(rows);
        });
    },

    getUser: function(req, res, next) {
        var param = {
            id : req.params.id
        }
        /* param 1) xml의 name값, 2) 해당 xml의 id값, 3) 파라미터, 4) 포맷값 */
        var query = mybatisMapper.getStatement('sqlMapper', 'getIdQuery', param, format)
        mysql.query(query, (error, rows) => {
            console.log(error);
            console.log(rows);
            // res.send(rows);
            res.json(rows);
        });
    },
}