const _dbCtrl = require('../data/index');

class UserController {
    async showUser(req, res) {
        try {
            const db = await _dbCtrl;
            const userDb = await db.all('select * from users');
            const cursosDb = await db.all('select * from cursos where id = 1');
            res.render('home', {userDb, cursosDb});
        } catch (error) {
           res.status(400).send(error)
        }
    }
    async dadosPess(req, res){
        try {
            const db = await _dbCtrl;
            const userDb = await db.all('select * from users');
            const dadosPess = await db.all('select * from dadosPess');
            res.render('dadosPess', { dadosPess, userDb});
            
        } catch (error) {
            res.status(400).send(error)
        }
    }
    async dadosProf(req, res){
        try {
            const db = await _dbCtrl;
            const trbReal = await db.all('select * from TrabReal');
            const projReal = await db.all('select * from projRoda');            
            const dadosProf = await db.all('select * from cursos');
            res.render('dadosProf', {dadosProf, projReal, trbReal});
        } catch (error) {
            res.status(400).send(error)
        }
    }
    async projReal(req, res){
        try {
            const db = await _dbCtrl;
            const projReal = await db.all('select * from projRoda');
            res.render('projReal', {projReal});
        } catch (error) {
            res.status(400).send(error)
        }
    }
}


module.exports = new UserController();