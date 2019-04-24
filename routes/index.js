const router = require('express').Router();
 const UserCtrl = require('../controller/user');
// const DadosPessCtrl = require('../controller/dadosPess');
// const DadosProfCtrl = require('../controller/dadosProf');
//const _ctrl = require('');

router.get('/', UserCtrl.showUser);
// router.post('/user', UserCtrl.store);
// router.post('/dadosPess/:id', DadosPessCtrl.store);
router.get('/dadosProf', UserCtrl.dadosProf);

// router.get('/user/:id', UserCtrl.show);
 router.get('/dadosPessoais', UserCtrl.dadosPess);
 router.get('/projReal', UserCtrl.projReal);



module.exports = router;