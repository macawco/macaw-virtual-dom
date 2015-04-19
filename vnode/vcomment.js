var version = require("./version")

module.exports = VirtualComment

function VirtualComment(text) {
    this.data = String(text)
}

VirtualComment.prototype.version = version
VirtualComment.prototype.type = "VirtualComment"
