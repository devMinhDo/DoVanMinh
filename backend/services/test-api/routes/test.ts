import { Router, Request, Response } from 'express';
import sumToN from '@connect/sum-to-n';

const router: Router = Router();

router.post('/sum-to-n-loop', (req, res, next) => {
    const { n } = req.body;
    res.json(sumToN.sumToNUsingLoop(n))
});

router.post('/sum-to-n-recursion', (req, res, next) => {
    const { n } = req.body;
    res.json(sumToN.sumToNUsingRecursion(n))
});

router.post('/sum-to-n-formula', (req, res, next) => {
    const { n } = req.body;
    res.json(sumToN.sumToNUsingFormula(n))

});

export default router;
