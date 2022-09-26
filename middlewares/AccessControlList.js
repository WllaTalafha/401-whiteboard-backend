'use strict';

function acl(capabilitiy) {
    return (function (req, res, next) {
        try {
            if (req.user.capabilites.includes(capabilitiy)) {
                next();
            } else {
                res.status(403).json(`Access Denid`);
            }
        } catch (e) {
            next(`${e}`);
        }
    })
}
module.exports = { acl };