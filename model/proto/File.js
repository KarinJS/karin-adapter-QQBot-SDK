/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots || ($protobuf.roots = {})

export const FileUUID = $root.FileUUID = (() => {

    /**
     * Properties of a FileUUID.
     * @exports IFileUUID
     * @interface IFileUUID
     * @property {string|null} [QQ] FileUUID QQ
     * @property {Uint8Array|null} [md5] FileUUID md5
     * @property {number|Long|null} [size] FileUUID size
     * @property {number|Long|null} [appid] FileUUID appid
     * @property {number|Long|null} [time] FileUUID time
     * @property {number|Long|null} [unknown_field] FileUUID unknown_field
     */

    /**
     * Constructs a new FileUUID.
     * @exports FileUUID
     * @classdesc Represents a FileUUID.
     * @implements IFileUUID
     * @constructor
     * @param {IFileUUID=} [properties] Properties to set
     */
    function FileUUID(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FileUUID QQ.
     * @member {string} QQ
     * @memberof FileUUID
     * @instance
     */
    FileUUID.prototype.QQ = "";

    /**
     * FileUUID md5.
     * @member {Uint8Array} md5
     * @memberof FileUUID
     * @instance
     */
    FileUUID.prototype.md5 = $util.newBuffer([]);

    /**
     * FileUUID size.
     * @member {number|Long} size
     * @memberof FileUUID
     * @instance
     */
    FileUUID.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * FileUUID appid.
     * @member {number|Long} appid
     * @memberof FileUUID
     * @instance
     */
    FileUUID.prototype.appid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * FileUUID time.
     * @member {number|Long} time
     * @memberof FileUUID
     * @instance
     */
    FileUUID.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * FileUUID unknown_field.
     * @member {number|Long} unknown_field
     * @memberof FileUUID
     * @instance
     */
    FileUUID.prototype.unknown_field = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new FileUUID instance using the specified properties.
     * @function create
     * @memberof FileUUID
     * @static
     * @param {IFileUUID=} [properties] Properties to set
     * @returns {FileUUID} FileUUID instance
     */
    FileUUID.create = function create(properties) {
        return new FileUUID(properties);
    };

    /**
     * Encodes the specified FileUUID message. Does not implicitly {@link FileUUID.verify|verify} messages.
     * @function encode
     * @memberof FileUUID
     * @static
     * @param {IFileUUID} message FileUUID message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileUUID.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.QQ != null && Object.hasOwnProperty.call(message, "QQ"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.QQ);
        if (message.md5 != null && Object.hasOwnProperty.call(message, "md5"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.md5);
        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.size);
        if (message.appid != null && Object.hasOwnProperty.call(message, "appid"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.appid);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.time);
        if (message.unknown_field != null && Object.hasOwnProperty.call(message, "unknown_field"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.unknown_field);
        return writer;
    };

    /**
     * Encodes the specified FileUUID message, length delimited. Does not implicitly {@link FileUUID.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FileUUID
     * @static
     * @param {IFileUUID} message FileUUID message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileUUID.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FileUUID message from the specified reader or buffer.
     * @function decode
     * @memberof FileUUID
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileUUID} FileUUID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileUUID.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileUUID();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.QQ = reader.string();
                    break;
                }
            case 2: {
                    message.md5 = reader.bytes();
                    break;
                }
            case 3: {
                    message.size = reader.uint64();
                    break;
                }
            case 4: {
                    message.appid = reader.uint64();
                    break;
                }
            case 5: {
                    message.time = reader.uint64();
                    break;
                }
            case 10: {
                    message.unknown_field = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FileUUID message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FileUUID
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FileUUID} FileUUID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileUUID.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FileUUID message.
     * @function verify
     * @memberof FileUUID
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FileUUID.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.QQ != null && message.hasOwnProperty("QQ"))
            if (!$util.isString(message.QQ))
                return "QQ: string expected";
        if (message.md5 != null && message.hasOwnProperty("md5"))
            if (!(message.md5 && typeof message.md5.length === "number" || $util.isString(message.md5)))
                return "md5: buffer expected";
        if (message.size != null && message.hasOwnProperty("size"))
            if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                return "size: integer|Long expected";
        if (message.appid != null && message.hasOwnProperty("appid"))
            if (!$util.isInteger(message.appid) && !(message.appid && $util.isInteger(message.appid.low) && $util.isInteger(message.appid.high)))
                return "appid: integer|Long expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                return "time: integer|Long expected";
        if (message.unknown_field != null && message.hasOwnProperty("unknown_field"))
            if (!$util.isInteger(message.unknown_field) && !(message.unknown_field && $util.isInteger(message.unknown_field.low) && $util.isInteger(message.unknown_field.high)))
                return "unknown_field: integer|Long expected";
        return null;
    };

    /**
     * Creates a FileUUID message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FileUUID
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FileUUID} FileUUID
     */
    FileUUID.fromObject = function fromObject(object) {
        if (object instanceof $root.FileUUID)
            return object;
        let message = new $root.FileUUID();
        if (object.QQ != null)
            message.QQ = String(object.QQ);
        if (object.md5 != null)
            if (typeof object.md5 === "string")
                $util.base64.decode(object.md5, message.md5 = $util.newBuffer($util.base64.length(object.md5)), 0);
            else if (object.md5.length >= 0)
                message.md5 = object.md5;
        if (object.size != null)
            if ($util.Long)
                (message.size = $util.Long.fromValue(object.size)).unsigned = true;
            else if (typeof object.size === "string")
                message.size = parseInt(object.size, 10);
            else if (typeof object.size === "number")
                message.size = object.size;
            else if (typeof object.size === "object")
                message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
        if (object.appid != null)
            if ($util.Long)
                (message.appid = $util.Long.fromValue(object.appid)).unsigned = true;
            else if (typeof object.appid === "string")
                message.appid = parseInt(object.appid, 10);
            else if (typeof object.appid === "number")
                message.appid = object.appid;
            else if (typeof object.appid === "object")
                message.appid = new $util.LongBits(object.appid.low >>> 0, object.appid.high >>> 0).toNumber(true);
        if (object.time != null)
            if ($util.Long)
                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
            else if (typeof object.time === "string")
                message.time = parseInt(object.time, 10);
            else if (typeof object.time === "number")
                message.time = object.time;
            else if (typeof object.time === "object")
                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
        if (object.unknown_field != null)
            if ($util.Long)
                (message.unknown_field = $util.Long.fromValue(object.unknown_field)).unsigned = true;
            else if (typeof object.unknown_field === "string")
                message.unknown_field = parseInt(object.unknown_field, 10);
            else if (typeof object.unknown_field === "number")
                message.unknown_field = object.unknown_field;
            else if (typeof object.unknown_field === "object")
                message.unknown_field = new $util.LongBits(object.unknown_field.low >>> 0, object.unknown_field.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a FileUUID message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FileUUID
     * @static
     * @param {FileUUID} message FileUUID
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FileUUID.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.QQ = "";
            if (options.bytes === String)
                object.md5 = "";
            else {
                object.md5 = [];
                if (options.bytes !== Array)
                    object.md5 = $util.newBuffer(object.md5);
            }
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.size = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.appid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.appid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.time = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.unknown_field = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.unknown_field = options.longs === String ? "0" : 0;
        }
        if (message.QQ != null && message.hasOwnProperty("QQ"))
            object.QQ = message.QQ;
        if (message.md5 != null && message.hasOwnProperty("md5"))
            object.md5 = options.bytes === String ? $util.base64.encode(message.md5, 0, message.md5.length) : options.bytes === Array ? Array.prototype.slice.call(message.md5) : message.md5;
        if (message.size != null && message.hasOwnProperty("size"))
            if (typeof message.size === "number")
                object.size = options.longs === String ? String(message.size) : message.size;
            else
                object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
        if (message.appid != null && message.hasOwnProperty("appid"))
            if (typeof message.appid === "number")
                object.appid = options.longs === String ? String(message.appid) : message.appid;
            else
                object.appid = options.longs === String ? $util.Long.prototype.toString.call(message.appid) : options.longs === Number ? new $util.LongBits(message.appid.low >>> 0, message.appid.high >>> 0).toNumber(true) : message.appid;
        if (message.time != null && message.hasOwnProperty("time"))
            if (typeof message.time === "number")
                object.time = options.longs === String ? String(message.time) : message.time;
            else
                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
        if (message.unknown_field != null && message.hasOwnProperty("unknown_field"))
            if (typeof message.unknown_field === "number")
                object.unknown_field = options.longs === String ? String(message.unknown_field) : message.unknown_field;
            else
                object.unknown_field = options.longs === String ? $util.Long.prototype.toString.call(message.unknown_field) : options.longs === Number ? new $util.LongBits(message.unknown_field.low >>> 0, message.unknown_field.high >>> 0).toNumber(true) : message.unknown_field;
        return object;
    };

    /**
     * Converts this FileUUID to JSON.
     * @function toJSON
     * @memberof FileUUID
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FileUUID.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FileUUID
     * @function getTypeUrl
     * @memberof FileUUID
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FileUUID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FileUUID";
    };

    return FileUUID;
})();

export const FileInfo = $root.FileInfo = (() => {

    /**
     * Properties of a FileInfo.
     * @exports IFileInfo
     * @interface IFileInfo
     * @property {FileInfo.IMessage1|null} [field1] FileInfo field1
     * @property {number|null} [field2] FileInfo field2
     */

    /**
     * Constructs a new FileInfo.
     * @exports FileInfo
     * @classdesc Represents a FileInfo.
     * @implements IFileInfo
     * @constructor
     * @param {IFileInfo=} [properties] Properties to set
     */
    function FileInfo(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FileInfo field1.
     * @member {FileInfo.IMessage1|null|undefined} field1
     * @memberof FileInfo
     * @instance
     */
    FileInfo.prototype.field1 = null;

    /**
     * FileInfo field2.
     * @member {number} field2
     * @memberof FileInfo
     * @instance
     */
    FileInfo.prototype.field2 = 0;

    /**
     * Creates a new FileInfo instance using the specified properties.
     * @function create
     * @memberof FileInfo
     * @static
     * @param {IFileInfo=} [properties] Properties to set
     * @returns {FileInfo} FileInfo instance
     */
    FileInfo.create = function create(properties) {
        return new FileInfo(properties);
    };

    /**
     * Encodes the specified FileInfo message. Does not implicitly {@link FileInfo.verify|verify} messages.
     * @function encode
     * @memberof FileInfo
     * @static
     * @param {IFileInfo} message FileInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
            $root.FileInfo.Message1.encode(message.field1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.field2 != null && Object.hasOwnProperty.call(message, "field2"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.field2);
        return writer;
    };

    /**
     * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link FileInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FileInfo
     * @static
     * @param {IFileInfo} message FileInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FileInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FileInfo message from the specified reader or buffer.
     * @function decode
     * @memberof FileInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FileInfo} FileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.field1 = $root.FileInfo.Message1.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.field2 = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FileInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FileInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FileInfo} FileInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FileInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FileInfo message.
     * @function verify
     * @memberof FileInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FileInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.field1 != null && message.hasOwnProperty("field1")) {
            let error = $root.FileInfo.Message1.verify(message.field1);
            if (error)
                return "field1." + error;
        }
        if (message.field2 != null && message.hasOwnProperty("field2"))
            if (!$util.isInteger(message.field2))
                return "field2: integer expected";
        return null;
    };

    /**
     * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FileInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FileInfo} FileInfo
     */
    FileInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.FileInfo)
            return object;
        let message = new $root.FileInfo();
        if (object.field1 != null) {
            if (typeof object.field1 !== "object")
                throw TypeError(".FileInfo.field1: object expected");
            message.field1 = $root.FileInfo.Message1.fromObject(object.field1);
        }
        if (object.field2 != null)
            message.field2 = object.field2 | 0;
        return message;
    };

    /**
     * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FileInfo
     * @static
     * @param {FileInfo} message FileInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FileInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.field1 = null;
            object.field2 = 0;
        }
        if (message.field1 != null && message.hasOwnProperty("field1"))
            object.field1 = $root.FileInfo.Message1.toObject(message.field1, options);
        if (message.field2 != null && message.hasOwnProperty("field2"))
            object.field2 = message.field2;
        return object;
    };

    /**
     * Converts this FileInfo to JSON.
     * @function toJSON
     * @memberof FileInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FileInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FileInfo
     * @function getTypeUrl
     * @memberof FileInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FileInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FileInfo";
    };

    FileInfo.Message1 = (function() {

        /**
         * Properties of a Message1.
         * @memberof FileInfo
         * @interface IMessage1
         * @property {IM12|null} [field2] Message1 field2
         * @property {FileInfo.Message1.IMessage11|null} [field3] Message1 field3
         */

        /**
         * Constructs a new Message1.
         * @memberof FileInfo
         * @classdesc Represents a Message1.
         * @implements IMessage1
         * @constructor
         * @param {FileInfo.IMessage1=} [properties] Properties to set
         */
        function Message1(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message1 field2.
         * @member {IM12|null|undefined} field2
         * @memberof FileInfo.Message1
         * @instance
         */
        Message1.prototype.field2 = null;

        /**
         * Message1 field3.
         * @member {FileInfo.Message1.IMessage11|null|undefined} field3
         * @memberof FileInfo.Message1
         * @instance
         */
        Message1.prototype.field3 = null;

        /**
         * Creates a new Message1 instance using the specified properties.
         * @function create
         * @memberof FileInfo.Message1
         * @static
         * @param {FileInfo.IMessage1=} [properties] Properties to set
         * @returns {FileInfo.Message1} Message1 instance
         */
        Message1.create = function create(properties) {
            return new Message1(properties);
        };

        /**
         * Encodes the specified Message1 message. Does not implicitly {@link FileInfo.Message1.verify|verify} messages.
         * @function encode
         * @memberof FileInfo.Message1
         * @static
         * @param {FileInfo.IMessage1} message Message1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message1.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field2 != null && Object.hasOwnProperty.call(message, "field2"))
                $root.M12.encode(message.field2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.field3 != null && Object.hasOwnProperty.call(message, "field3"))
                $root.FileInfo.Message1.Message11.encode(message.field3, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message1 message, length delimited. Does not implicitly {@link FileInfo.Message1.verify|verify} messages.
         * @function encodeDelimited
         * @memberof FileInfo.Message1
         * @static
         * @param {FileInfo.IMessage1} message Message1 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message1.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message1 message from the specified reader or buffer.
         * @function decode
         * @memberof FileInfo.Message1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {FileInfo.Message1} Message1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message1.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileInfo.Message1();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.field2 = $root.M12.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.field3 = $root.FileInfo.Message1.Message11.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message1 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof FileInfo.Message1
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {FileInfo.Message1} Message1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message1.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message1 message.
         * @function verify
         * @memberof FileInfo.Message1
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message1.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.field2 != null && message.hasOwnProperty("field2")) {
                let error = $root.M12.verify(message.field2);
                if (error)
                    return "field2." + error;
            }
            if (message.field3 != null && message.hasOwnProperty("field3")) {
                let error = $root.FileInfo.Message1.Message11.verify(message.field3);
                if (error)
                    return "field3." + error;
            }
            return null;
        };

        /**
         * Creates a Message1 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof FileInfo.Message1
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {FileInfo.Message1} Message1
         */
        Message1.fromObject = function fromObject(object) {
            if (object instanceof $root.FileInfo.Message1)
                return object;
            let message = new $root.FileInfo.Message1();
            if (object.field2 != null) {
                if (typeof object.field2 !== "object")
                    throw TypeError(".FileInfo.Message1.field2: object expected");
                message.field2 = $root.M12.fromObject(object.field2);
            }
            if (object.field3 != null) {
                if (typeof object.field3 !== "object")
                    throw TypeError(".FileInfo.Message1.field3: object expected");
                message.field3 = $root.FileInfo.Message1.Message11.fromObject(object.field3);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message1 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof FileInfo.Message1
         * @static
         * @param {FileInfo.Message1} message Message1
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message1.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.field2 = null;
                object.field3 = null;
            }
            if (message.field2 != null && message.hasOwnProperty("field2"))
                object.field2 = $root.M12.toObject(message.field2, options);
            if (message.field3 != null && message.hasOwnProperty("field3"))
                object.field3 = $root.FileInfo.Message1.Message11.toObject(message.field3, options);
            return object;
        };

        /**
         * Converts this Message1 to JSON.
         * @function toJSON
         * @memberof FileInfo.Message1
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message1.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message1
         * @function getTypeUrl
         * @memberof FileInfo.Message1
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/FileInfo.Message1";
        };

        Message1.Message11 = (function() {

            /**
             * Properties of a Message11.
             * @memberof FileInfo.Message1
             * @interface IMessage11
             * @property {string|null} [field2] Message11 field2
             * @property {number|null} [field7] Message11 field7
             * @property {number|null} [field10] Message11 field10
             * @property {Uint8Array|null} [field13] Message11 field13
             * @property {number|null} [field20] Message11 field20
             * @property {number|null} [field22] Message11 field22
             * @property {number|null} [field23] Message11 field23
             * @property {number|null} [field25] Message11 field25
             * @property {number|null} [field26] Message11 field26
             * @property {FileInfo.Message1.Message11.IMessage12|null} [field34] Message11 field34
             */

            /**
             * Constructs a new Message11.
             * @memberof FileInfo.Message1
             * @classdesc Represents a Message11.
             * @implements IMessage11
             * @constructor
             * @param {FileInfo.Message1.IMessage11=} [properties] Properties to set
             */
            function Message11(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Message11 field2.
             * @member {string} field2
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field2 = "";

            /**
             * Message11 field7.
             * @member {number} field7
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field7 = 0;

            /**
             * Message11 field10.
             * @member {number} field10
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field10 = 0;

            /**
             * Message11 field13.
             * @member {Uint8Array} field13
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field13 = $util.newBuffer([]);

            /**
             * Message11 field20.
             * @member {number} field20
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field20 = 0;

            /**
             * Message11 field22.
             * @member {number} field22
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field22 = 0;

            /**
             * Message11 field23.
             * @member {number} field23
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field23 = 0;

            /**
             * Message11 field25.
             * @member {number} field25
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field25 = 0;

            /**
             * Message11 field26.
             * @member {number} field26
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field26 = 0;

            /**
             * Message11 field34.
             * @member {FileInfo.Message1.Message11.IMessage12|null|undefined} field34
             * @memberof FileInfo.Message1.Message11
             * @instance
             */
            Message11.prototype.field34 = null;

            /**
             * Creates a new Message11 instance using the specified properties.
             * @function create
             * @memberof FileInfo.Message1.Message11
             * @static
             * @param {FileInfo.Message1.IMessage11=} [properties] Properties to set
             * @returns {FileInfo.Message1.Message11} Message11 instance
             */
            Message11.create = function create(properties) {
                return new Message11(properties);
            };

            /**
             * Encodes the specified Message11 message. Does not implicitly {@link FileInfo.Message1.Message11.verify|verify} messages.
             * @function encode
             * @memberof FileInfo.Message1.Message11
             * @static
             * @param {FileInfo.Message1.IMessage11} message Message11 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message11.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.field2 != null && Object.hasOwnProperty.call(message, "field2"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.field2);
                if (message.field7 != null && Object.hasOwnProperty.call(message, "field7"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.field7);
                if (message.field10 != null && Object.hasOwnProperty.call(message, "field10"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.field10);
                if (message.field13 != null && Object.hasOwnProperty.call(message, "field13"))
                    writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.field13);
                if (message.field20 != null && Object.hasOwnProperty.call(message, "field20"))
                    writer.uint32(/* id 20, wireType 0 =*/160).int32(message.field20);
                if (message.field22 != null && Object.hasOwnProperty.call(message, "field22"))
                    writer.uint32(/* id 22, wireType 0 =*/176).int32(message.field22);
                if (message.field23 != null && Object.hasOwnProperty.call(message, "field23"))
                    writer.uint32(/* id 23, wireType 0 =*/184).int32(message.field23);
                if (message.field25 != null && Object.hasOwnProperty.call(message, "field25"))
                    writer.uint32(/* id 25, wireType 0 =*/200).int32(message.field25);
                if (message.field26 != null && Object.hasOwnProperty.call(message, "field26"))
                    writer.uint32(/* id 26, wireType 0 =*/208).int32(message.field26);
                if (message.field34 != null && Object.hasOwnProperty.call(message, "field34"))
                    $root.FileInfo.Message1.Message11.Message12.encode(message.field34, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Message11 message, length delimited. Does not implicitly {@link FileInfo.Message1.Message11.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FileInfo.Message1.Message11
             * @static
             * @param {FileInfo.Message1.IMessage11} message Message11 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message11.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Message11 message from the specified reader or buffer.
             * @function decode
             * @memberof FileInfo.Message1.Message11
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FileInfo.Message1.Message11} Message11
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message11.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileInfo.Message1.Message11();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            message.field2 = reader.string();
                            break;
                        }
                    case 7: {
                            message.field7 = reader.int32();
                            break;
                        }
                    case 10: {
                            message.field10 = reader.int32();
                            break;
                        }
                    case 13: {
                            message.field13 = reader.bytes();
                            break;
                        }
                    case 20: {
                            message.field20 = reader.int32();
                            break;
                        }
                    case 22: {
                            message.field22 = reader.int32();
                            break;
                        }
                    case 23: {
                            message.field23 = reader.int32();
                            break;
                        }
                    case 25: {
                            message.field25 = reader.int32();
                            break;
                        }
                    case 26: {
                            message.field26 = reader.int32();
                            break;
                        }
                    case 34: {
                            message.field34 = $root.FileInfo.Message1.Message11.Message12.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Message11 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FileInfo.Message1.Message11
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FileInfo.Message1.Message11} Message11
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message11.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Message11 message.
             * @function verify
             * @memberof FileInfo.Message1.Message11
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message11.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.field2 != null && message.hasOwnProperty("field2"))
                    if (!$util.isString(message.field2))
                        return "field2: string expected";
                if (message.field7 != null && message.hasOwnProperty("field7"))
                    if (!$util.isInteger(message.field7))
                        return "field7: integer expected";
                if (message.field10 != null && message.hasOwnProperty("field10"))
                    if (!$util.isInteger(message.field10))
                        return "field10: integer expected";
                if (message.field13 != null && message.hasOwnProperty("field13"))
                    if (!(message.field13 && typeof message.field13.length === "number" || $util.isString(message.field13)))
                        return "field13: buffer expected";
                if (message.field20 != null && message.hasOwnProperty("field20"))
                    if (!$util.isInteger(message.field20))
                        return "field20: integer expected";
                if (message.field22 != null && message.hasOwnProperty("field22"))
                    if (!$util.isInteger(message.field22))
                        return "field22: integer expected";
                if (message.field23 != null && message.hasOwnProperty("field23"))
                    if (!$util.isInteger(message.field23))
                        return "field23: integer expected";
                if (message.field25 != null && message.hasOwnProperty("field25"))
                    if (!$util.isInteger(message.field25))
                        return "field25: integer expected";
                if (message.field26 != null && message.hasOwnProperty("field26"))
                    if (!$util.isInteger(message.field26))
                        return "field26: integer expected";
                if (message.field34 != null && message.hasOwnProperty("field34")) {
                    let error = $root.FileInfo.Message1.Message11.Message12.verify(message.field34);
                    if (error)
                        return "field34." + error;
                }
                return null;
            };

            /**
             * Creates a Message11 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FileInfo.Message1.Message11
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FileInfo.Message1.Message11} Message11
             */
            Message11.fromObject = function fromObject(object) {
                if (object instanceof $root.FileInfo.Message1.Message11)
                    return object;
                let message = new $root.FileInfo.Message1.Message11();
                if (object.field2 != null)
                    message.field2 = String(object.field2);
                if (object.field7 != null)
                    message.field7 = object.field7 | 0;
                if (object.field10 != null)
                    message.field10 = object.field10 | 0;
                if (object.field13 != null)
                    if (typeof object.field13 === "string")
                        $util.base64.decode(object.field13, message.field13 = $util.newBuffer($util.base64.length(object.field13)), 0);
                    else if (object.field13.length >= 0)
                        message.field13 = object.field13;
                if (object.field20 != null)
                    message.field20 = object.field20 | 0;
                if (object.field22 != null)
                    message.field22 = object.field22 | 0;
                if (object.field23 != null)
                    message.field23 = object.field23 | 0;
                if (object.field25 != null)
                    message.field25 = object.field25 | 0;
                if (object.field26 != null)
                    message.field26 = object.field26 | 0;
                if (object.field34 != null) {
                    if (typeof object.field34 !== "object")
                        throw TypeError(".FileInfo.Message1.Message11.field34: object expected");
                    message.field34 = $root.FileInfo.Message1.Message11.Message12.fromObject(object.field34);
                }
                return message;
            };

            /**
             * Creates a plain object from a Message11 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FileInfo.Message1.Message11
             * @static
             * @param {FileInfo.Message1.Message11} message Message11
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message11.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.field2 = "";
                    object.field7 = 0;
                    object.field10 = 0;
                    if (options.bytes === String)
                        object.field13 = "";
                    else {
                        object.field13 = [];
                        if (options.bytes !== Array)
                            object.field13 = $util.newBuffer(object.field13);
                    }
                    object.field20 = 0;
                    object.field22 = 0;
                    object.field23 = 0;
                    object.field25 = 0;
                    object.field26 = 0;
                    object.field34 = null;
                }
                if (message.field2 != null && message.hasOwnProperty("field2"))
                    object.field2 = message.field2;
                if (message.field7 != null && message.hasOwnProperty("field7"))
                    object.field7 = message.field7;
                if (message.field10 != null && message.hasOwnProperty("field10"))
                    object.field10 = message.field10;
                if (message.field13 != null && message.hasOwnProperty("field13"))
                    object.field13 = options.bytes === String ? $util.base64.encode(message.field13, 0, message.field13.length) : options.bytes === Array ? Array.prototype.slice.call(message.field13) : message.field13;
                if (message.field20 != null && message.hasOwnProperty("field20"))
                    object.field20 = message.field20;
                if (message.field22 != null && message.hasOwnProperty("field22"))
                    object.field22 = message.field22;
                if (message.field23 != null && message.hasOwnProperty("field23"))
                    object.field23 = message.field23;
                if (message.field25 != null && message.hasOwnProperty("field25"))
                    object.field25 = message.field25;
                if (message.field26 != null && message.hasOwnProperty("field26"))
                    object.field26 = message.field26;
                if (message.field34 != null && message.hasOwnProperty("field34"))
                    object.field34 = $root.FileInfo.Message1.Message11.Message12.toObject(message.field34, options);
                return object;
            };

            /**
             * Converts this Message11 to JSON.
             * @function toJSON
             * @memberof FileInfo.Message1.Message11
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message11.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Message11
             * @function getTypeUrl
             * @memberof FileInfo.Message1.Message11
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Message11.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/FileInfo.Message1.Message11";
            };

            Message11.Message12 = (function() {

                /**
                 * Properties of a Message12.
                 * @memberof FileInfo.Message1.Message11
                 * @interface IMessage12
                 * @property {number|null} [field1] Message12 field1
                 * @property {string|null} [str] Message12 str
                 * @property {Uint8Array|null} [bytes] Message12 bytes
                 * @property {string|null} [path] Message12 path
                 */

                /**
                 * Constructs a new Message12.
                 * @memberof FileInfo.Message1.Message11
                 * @classdesc Represents a Message12.
                 * @implements IMessage12
                 * @constructor
                 * @param {FileInfo.Message1.Message11.IMessage12=} [properties] Properties to set
                 */
                function Message12(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Message12 field1.
                 * @member {number} field1
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @instance
                 */
                Message12.prototype.field1 = 0;

                /**
                 * Message12 str.
                 * @member {string|null|undefined} str
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @instance
                 */
                Message12.prototype.str = null;

                /**
                 * Message12 bytes.
                 * @member {Uint8Array|null|undefined} bytes
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @instance
                 */
                Message12.prototype.bytes = null;

                /**
                 * Message12 path.
                 * @member {string} path
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @instance
                 */
                Message12.prototype.path = "";

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * Message12 field9.
                 * @member {"str"|"bytes"|undefined} field9
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @instance
                 */
                Object.defineProperty(Message12.prototype, "field9", {
                    get: $util.oneOfGetter($oneOfFields = ["str", "bytes"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Message12 instance using the specified properties.
                 * @function create
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @static
                 * @param {FileInfo.Message1.Message11.IMessage12=} [properties] Properties to set
                 * @returns {FileInfo.Message1.Message11.Message12} Message12 instance
                 */
                Message12.create = function create(properties) {
                    return new Message12(properties);
                };

                /**
                 * Encodes the specified Message12 message. Does not implicitly {@link FileInfo.Message1.Message11.Message12.verify|verify} messages.
                 * @function encode
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @static
                 * @param {FileInfo.Message1.Message11.IMessage12} message Message12 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Message12.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.field1);
                    if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.str);
                    if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.bytes);
                    if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                        writer.uint32(/* id 30, wireType 2 =*/242).string(message.path);
                    return writer;
                };

                /**
                 * Encodes the specified Message12 message, length delimited. Does not implicitly {@link FileInfo.Message1.Message11.Message12.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @static
                 * @param {FileInfo.Message1.Message11.IMessage12} message Message12 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Message12.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Message12 message from the specified reader or buffer.
                 * @function decode
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {FileInfo.Message1.Message11.Message12} Message12
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Message12.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FileInfo.Message1.Message11.Message12();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.field1 = reader.int32();
                                break;
                            }
                        case 2: {
                                message.str = reader.string();
                                break;
                            }
                        case 3: {
                                message.bytes = reader.bytes();
                                break;
                            }
                        case 30: {
                                message.path = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Message12 message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {FileInfo.Message1.Message11.Message12} Message12
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Message12.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Message12 message.
                 * @function verify
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Message12.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.field1 != null && message.hasOwnProperty("field1"))
                        if (!$util.isInteger(message.field1))
                            return "field1: integer expected";
                    if (message.str != null && message.hasOwnProperty("str")) {
                        properties.field9 = 1;
                        if (!$util.isString(message.str))
                            return "str: string expected";
                    }
                    if (message.bytes != null && message.hasOwnProperty("bytes")) {
                        if (properties.field9 === 1)
                            return "field9: multiple values";
                        properties.field9 = 1;
                        if (!(message.bytes && typeof message.bytes.length === "number" || $util.isString(message.bytes)))
                            return "bytes: buffer expected";
                    }
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    return null;
                };

                /**
                 * Creates a Message12 message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {FileInfo.Message1.Message11.Message12} Message12
                 */
                Message12.fromObject = function fromObject(object) {
                    if (object instanceof $root.FileInfo.Message1.Message11.Message12)
                        return object;
                    let message = new $root.FileInfo.Message1.Message11.Message12();
                    if (object.field1 != null)
                        message.field1 = object.field1 | 0;
                    if (object.str != null)
                        message.str = String(object.str);
                    if (object.bytes != null)
                        if (typeof object.bytes === "string")
                            $util.base64.decode(object.bytes, message.bytes = $util.newBuffer($util.base64.length(object.bytes)), 0);
                        else if (object.bytes.length >= 0)
                            message.bytes = object.bytes;
                    if (object.path != null)
                        message.path = String(object.path);
                    return message;
                };

                /**
                 * Creates a plain object from a Message12 message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @static
                 * @param {FileInfo.Message1.Message11.Message12} message Message12
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Message12.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.field1 = 0;
                        object.path = "";
                    }
                    if (message.field1 != null && message.hasOwnProperty("field1"))
                        object.field1 = message.field1;
                    if (message.str != null && message.hasOwnProperty("str")) {
                        object.str = message.str;
                        if (options.oneofs)
                            object.field9 = "str";
                    }
                    if (message.bytes != null && message.hasOwnProperty("bytes")) {
                        object.bytes = options.bytes === String ? $util.base64.encode(message.bytes, 0, message.bytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytes) : message.bytes;
                        if (options.oneofs)
                            object.field9 = "bytes";
                    }
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    return object;
                };

                /**
                 * Converts this Message12 to JSON.
                 * @function toJSON
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Message12.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Message12
                 * @function getTypeUrl
                 * @memberof FileInfo.Message1.Message11.Message12
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Message12.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/FileInfo.Message1.Message11.Message12";
                };

                return Message12;
            })();

            return Message11;
        })();

        return Message1;
    })();

    return FileInfo;
})();

export const M12 = $root.M12 = (() => {

    /**
     * Properties of a M12.
     * @exports IM12
     * @interface IM12
     * @property {M12.IM121|null} [field1] M12 field1
     * @property {M12.IM122|null} [field2] M12 field2
     */

    /**
     * Constructs a new M12.
     * @exports M12
     * @classdesc Represents a M12.
     * @implements IM12
     * @constructor
     * @param {IM12=} [properties] Properties to set
     */
    function M12(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * M12 field1.
     * @member {M12.IM121|null|undefined} field1
     * @memberof M12
     * @instance
     */
    M12.prototype.field1 = null;

    /**
     * M12 field2.
     * @member {M12.IM122|null|undefined} field2
     * @memberof M12
     * @instance
     */
    M12.prototype.field2 = null;

    /**
     * Creates a new M12 instance using the specified properties.
     * @function create
     * @memberof M12
     * @static
     * @param {IM12=} [properties] Properties to set
     * @returns {M12} M12 instance
     */
    M12.create = function create(properties) {
        return new M12(properties);
    };

    /**
     * Encodes the specified M12 message. Does not implicitly {@link M12.verify|verify} messages.
     * @function encode
     * @memberof M12
     * @static
     * @param {IM12} message M12 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M12.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
            $root.M12.M121.encode(message.field1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.field2 != null && Object.hasOwnProperty.call(message, "field2"))
            $root.M12.M122.encode(message.field2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified M12 message, length delimited. Does not implicitly {@link M12.verify|verify} messages.
     * @function encodeDelimited
     * @memberof M12
     * @static
     * @param {IM12} message M12 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    M12.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a M12 message from the specified reader or buffer.
     * @function decode
     * @memberof M12
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {M12} M12
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M12.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.field1 = $root.M12.M121.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.field2 = $root.M12.M122.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a M12 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof M12
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {M12} M12
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    M12.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a M12 message.
     * @function verify
     * @memberof M12
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    M12.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.field1 != null && message.hasOwnProperty("field1")) {
            let error = $root.M12.M121.verify(message.field1);
            if (error)
                return "field1." + error;
        }
        if (message.field2 != null && message.hasOwnProperty("field2")) {
            let error = $root.M12.M122.verify(message.field2);
            if (error)
                return "field2." + error;
        }
        return null;
    };

    /**
     * Creates a M12 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof M12
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {M12} M12
     */
    M12.fromObject = function fromObject(object) {
        if (object instanceof $root.M12)
            return object;
        let message = new $root.M12();
        if (object.field1 != null) {
            if (typeof object.field1 !== "object")
                throw TypeError(".M12.field1: object expected");
            message.field1 = $root.M12.M121.fromObject(object.field1);
        }
        if (object.field2 != null) {
            if (typeof object.field2 !== "object")
                throw TypeError(".M12.field2: object expected");
            message.field2 = $root.M12.M122.fromObject(object.field2);
        }
        return message;
    };

    /**
     * Creates a plain object from a M12 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof M12
     * @static
     * @param {M12} message M12
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    M12.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.field1 = null;
            object.field2 = null;
        }
        if (message.field1 != null && message.hasOwnProperty("field1"))
            object.field1 = $root.M12.M121.toObject(message.field1, options);
        if (message.field2 != null && message.hasOwnProperty("field2"))
            object.field2 = $root.M12.M122.toObject(message.field2, options);
        return object;
    };

    /**
     * Converts this M12 to JSON.
     * @function toJSON
     * @memberof M12
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    M12.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for M12
     * @function getTypeUrl
     * @memberof M12
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    M12.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/M12";
    };

    M12.M121 = (function() {

        /**
         * Properties of a M121.
         * @memberof M12
         * @interface IM121
         * @property {M12.M121.IM1211|null} [field1] M121 field1
         * @property {M12.M121.IM1212|null} [field2] M121 field2
         * @property {number|null} [field5] M121 field5
         * @property {M12.M121.IM1267|null} [field6] M121 field6
         */

        /**
         * Constructs a new M121.
         * @memberof M12
         * @classdesc Represents a M121.
         * @implements IM121
         * @constructor
         * @param {M12.IM121=} [properties] Properties to set
         */
        function M121(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * M121 field1.
         * @member {M12.M121.IM1211|null|undefined} field1
         * @memberof M12.M121
         * @instance
         */
        M121.prototype.field1 = null;

        /**
         * M121 field2.
         * @member {M12.M121.IM1212|null|undefined} field2
         * @memberof M12.M121
         * @instance
         */
        M121.prototype.field2 = null;

        /**
         * M121 field5.
         * @member {number} field5
         * @memberof M12.M121
         * @instance
         */
        M121.prototype.field5 = 0;

        /**
         * M121 field6.
         * @member {M12.M121.IM1267|null|undefined} field6
         * @memberof M12.M121
         * @instance
         */
        M121.prototype.field6 = null;

        /**
         * Creates a new M121 instance using the specified properties.
         * @function create
         * @memberof M12.M121
         * @static
         * @param {M12.IM121=} [properties] Properties to set
         * @returns {M12.M121} M121 instance
         */
        M121.create = function create(properties) {
            return new M121(properties);
        };

        /**
         * Encodes the specified M121 message. Does not implicitly {@link M12.M121.verify|verify} messages.
         * @function encode
         * @memberof M12.M121
         * @static
         * @param {M12.IM121} message M121 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M121.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
                $root.M12.M121.M1211.encode(message.field1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.field2 != null && Object.hasOwnProperty.call(message, "field2"))
                $root.M12.M121.M1212.encode(message.field2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.field5 != null && Object.hasOwnProperty.call(message, "field5"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.field5);
            if (message.field6 != null && Object.hasOwnProperty.call(message, "field6"))
                $root.M12.M121.M1267.encode(message.field6, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified M121 message, length delimited. Does not implicitly {@link M12.M121.verify|verify} messages.
         * @function encodeDelimited
         * @memberof M12.M121
         * @static
         * @param {M12.IM121} message M121 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M121.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a M121 message from the specified reader or buffer.
         * @function decode
         * @memberof M12.M121
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {M12.M121} M121
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M121.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M121();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.field1 = $root.M12.M121.M1211.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.field2 = $root.M12.M121.M1212.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.field5 = reader.int32();
                        break;
                    }
                case 6: {
                        message.field6 = $root.M12.M121.M1267.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a M121 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof M12.M121
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {M12.M121} M121
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M121.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a M121 message.
         * @function verify
         * @memberof M12.M121
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        M121.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.field1 != null && message.hasOwnProperty("field1")) {
                let error = $root.M12.M121.M1211.verify(message.field1);
                if (error)
                    return "field1." + error;
            }
            if (message.field2 != null && message.hasOwnProperty("field2")) {
                let error = $root.M12.M121.M1212.verify(message.field2);
                if (error)
                    return "field2." + error;
            }
            if (message.field5 != null && message.hasOwnProperty("field5"))
                if (!$util.isInteger(message.field5))
                    return "field5: integer expected";
            if (message.field6 != null && message.hasOwnProperty("field6")) {
                let error = $root.M12.M121.M1267.verify(message.field6);
                if (error)
                    return "field6." + error;
            }
            return null;
        };

        /**
         * Creates a M121 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof M12.M121
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {M12.M121} M121
         */
        M121.fromObject = function fromObject(object) {
            if (object instanceof $root.M12.M121)
                return object;
            let message = new $root.M12.M121();
            if (object.field1 != null) {
                if (typeof object.field1 !== "object")
                    throw TypeError(".M12.M121.field1: object expected");
                message.field1 = $root.M12.M121.M1211.fromObject(object.field1);
            }
            if (object.field2 != null) {
                if (typeof object.field2 !== "object")
                    throw TypeError(".M12.M121.field2: object expected");
                message.field2 = $root.M12.M121.M1212.fromObject(object.field2);
            }
            if (object.field5 != null)
                message.field5 = object.field5 | 0;
            if (object.field6 != null) {
                if (typeof object.field6 !== "object")
                    throw TypeError(".M12.M121.field6: object expected");
                message.field6 = $root.M12.M121.M1267.fromObject(object.field6);
            }
            return message;
        };

        /**
         * Creates a plain object from a M121 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof M12.M121
         * @static
         * @param {M12.M121} message M121
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        M121.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.field1 = null;
                object.field2 = null;
                object.field5 = 0;
                object.field6 = null;
            }
            if (message.field1 != null && message.hasOwnProperty("field1"))
                object.field1 = $root.M12.M121.M1211.toObject(message.field1, options);
            if (message.field2 != null && message.hasOwnProperty("field2"))
                object.field2 = $root.M12.M121.M1212.toObject(message.field2, options);
            if (message.field5 != null && message.hasOwnProperty("field5"))
                object.field5 = message.field5;
            if (message.field6 != null && message.hasOwnProperty("field6"))
                object.field6 = $root.M12.M121.M1267.toObject(message.field6, options);
            return object;
        };

        /**
         * Converts this M121 to JSON.
         * @function toJSON
         * @memberof M12.M121
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        M121.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for M121
         * @function getTypeUrl
         * @memberof M12.M121
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        M121.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/M12.M121";
        };

        M121.M1211 = (function() {

            /**
             * Properties of a M1211.
             * @memberof M12.M121
             * @interface IM1211
             * @property {M12.M121.M1211.IM12111|null} [field1] M1211 field1
             * @property {string|null} [file_id] M1211 file_id
             * @property {number|null} [field3] M1211 field3
             * @property {number|null} [field4] M1211 field4
             * @property {number|null} [field5] M1211 field5
             * @property {number|null} [field7] M1211 field7
             */

            /**
             * Constructs a new M1211.
             * @memberof M12.M121
             * @classdesc Represents a M1211.
             * @implements IM1211
             * @constructor
             * @param {M12.M121.IM1211=} [properties] Properties to set
             */
            function M1211(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * M1211 field1.
             * @member {M12.M121.M1211.IM12111|null|undefined} field1
             * @memberof M12.M121.M1211
             * @instance
             */
            M1211.prototype.field1 = null;

            /**
             * M1211 file_id.
             * @member {string} file_id
             * @memberof M12.M121.M1211
             * @instance
             */
            M1211.prototype.file_id = "";

            /**
             * M1211 field3.
             * @member {number} field3
             * @memberof M12.M121.M1211
             * @instance
             */
            M1211.prototype.field3 = 0;

            /**
             * M1211 field4.
             * @member {number} field4
             * @memberof M12.M121.M1211
             * @instance
             */
            M1211.prototype.field4 = 0;

            /**
             * M1211 field5.
             * @member {number} field5
             * @memberof M12.M121.M1211
             * @instance
             */
            M1211.prototype.field5 = 0;

            /**
             * M1211 field7.
             * @member {number} field7
             * @memberof M12.M121.M1211
             * @instance
             */
            M1211.prototype.field7 = 0;

            /**
             * Creates a new M1211 instance using the specified properties.
             * @function create
             * @memberof M12.M121.M1211
             * @static
             * @param {M12.M121.IM1211=} [properties] Properties to set
             * @returns {M12.M121.M1211} M1211 instance
             */
            M1211.create = function create(properties) {
                return new M1211(properties);
            };

            /**
             * Encodes the specified M1211 message. Does not implicitly {@link M12.M121.M1211.verify|verify} messages.
             * @function encode
             * @memberof M12.M121.M1211
             * @static
             * @param {M12.M121.IM1211} message M1211 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            M1211.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
                    $root.M12.M121.M1211.M12111.encode(message.field1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.file_id != null && Object.hasOwnProperty.call(message, "file_id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.file_id);
                if (message.field3 != null && Object.hasOwnProperty.call(message, "field3"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.field3);
                if (message.field4 != null && Object.hasOwnProperty.call(message, "field4"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.field4);
                if (message.field5 != null && Object.hasOwnProperty.call(message, "field5"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.field5);
                if (message.field7 != null && Object.hasOwnProperty.call(message, "field7"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.field7);
                return writer;
            };

            /**
             * Encodes the specified M1211 message, length delimited. Does not implicitly {@link M12.M121.M1211.verify|verify} messages.
             * @function encodeDelimited
             * @memberof M12.M121.M1211
             * @static
             * @param {M12.M121.IM1211} message M1211 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            M1211.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a M1211 message from the specified reader or buffer.
             * @function decode
             * @memberof M12.M121.M1211
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {M12.M121.M1211} M1211
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            M1211.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M121.M1211();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.field1 = $root.M12.M121.M1211.M12111.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.file_id = reader.string();
                            break;
                        }
                    case 3: {
                            message.field3 = reader.int32();
                            break;
                        }
                    case 4: {
                            message.field4 = reader.int32();
                            break;
                        }
                    case 5: {
                            message.field5 = reader.int32();
                            break;
                        }
                    case 7: {
                            message.field7 = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a M1211 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof M12.M121.M1211
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {M12.M121.M1211} M1211
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            M1211.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a M1211 message.
             * @function verify
             * @memberof M12.M121.M1211
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            M1211.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.field1 != null && message.hasOwnProperty("field1")) {
                    let error = $root.M12.M121.M1211.M12111.verify(message.field1);
                    if (error)
                        return "field1." + error;
                }
                if (message.file_id != null && message.hasOwnProperty("file_id"))
                    if (!$util.isString(message.file_id))
                        return "file_id: string expected";
                if (message.field3 != null && message.hasOwnProperty("field3"))
                    if (!$util.isInteger(message.field3))
                        return "field3: integer expected";
                if (message.field4 != null && message.hasOwnProperty("field4"))
                    if (!$util.isInteger(message.field4))
                        return "field4: integer expected";
                if (message.field5 != null && message.hasOwnProperty("field5"))
                    if (!$util.isInteger(message.field5))
                        return "field5: integer expected";
                if (message.field7 != null && message.hasOwnProperty("field7"))
                    if (!$util.isInteger(message.field7))
                        return "field7: integer expected";
                return null;
            };

            /**
             * Creates a M1211 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof M12.M121.M1211
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {M12.M121.M1211} M1211
             */
            M1211.fromObject = function fromObject(object) {
                if (object instanceof $root.M12.M121.M1211)
                    return object;
                let message = new $root.M12.M121.M1211();
                if (object.field1 != null) {
                    if (typeof object.field1 !== "object")
                        throw TypeError(".M12.M121.M1211.field1: object expected");
                    message.field1 = $root.M12.M121.M1211.M12111.fromObject(object.field1);
                }
                if (object.file_id != null)
                    message.file_id = String(object.file_id);
                if (object.field3 != null)
                    message.field3 = object.field3 | 0;
                if (object.field4 != null)
                    message.field4 = object.field4 | 0;
                if (object.field5 != null)
                    message.field5 = object.field5 | 0;
                if (object.field7 != null)
                    message.field7 = object.field7 | 0;
                return message;
            };

            /**
             * Creates a plain object from a M1211 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof M12.M121.M1211
             * @static
             * @param {M12.M121.M1211} message M1211
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            M1211.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.field1 = null;
                    object.file_id = "";
                    object.field3 = 0;
                    object.field4 = 0;
                    object.field5 = 0;
                    object.field7 = 0;
                }
                if (message.field1 != null && message.hasOwnProperty("field1"))
                    object.field1 = $root.M12.M121.M1211.M12111.toObject(message.field1, options);
                if (message.file_id != null && message.hasOwnProperty("file_id"))
                    object.file_id = message.file_id;
                if (message.field3 != null && message.hasOwnProperty("field3"))
                    object.field3 = message.field3;
                if (message.field4 != null && message.hasOwnProperty("field4"))
                    object.field4 = message.field4;
                if (message.field5 != null && message.hasOwnProperty("field5"))
                    object.field5 = message.field5;
                if (message.field7 != null && message.hasOwnProperty("field7"))
                    object.field7 = message.field7;
                return object;
            };

            /**
             * Converts this M1211 to JSON.
             * @function toJSON
             * @memberof M12.M121.M1211
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            M1211.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for M1211
             * @function getTypeUrl
             * @memberof M12.M121.M1211
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            M1211.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/M12.M121.M1211";
            };

            M1211.M12111 = (function() {

                /**
                 * Properties of a M12111.
                 * @memberof M12.M121.M1211
                 * @interface IM12111
                 * @property {number|null} [field1] M12111 field1
                 * @property {string|null} [md5] M12111 md5
                 * @property {string|null} [sha1] M12111 sha1
                 * @property {string|null} [name] M12111 name
                 * @property {M12.M121.M1211.M12111.IMessage1215|null} [field5] M12111 field5
                 * @property {number|null} [width] M12111 width
                 * @property {number|null} [height] M12111 height
                 * @property {number|null} [field9] M12111 field9
                 */

                /**
                 * Constructs a new M12111.
                 * @memberof M12.M121.M1211
                 * @classdesc Represents a M12111.
                 * @implements IM12111
                 * @constructor
                 * @param {M12.M121.M1211.IM12111=} [properties] Properties to set
                 */
                function M12111(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * M12111 field1.
                 * @member {number} field1
                 * @memberof M12.M121.M1211.M12111
                 * @instance
                 */
                M12111.prototype.field1 = 0;

                /**
                 * M12111 md5.
                 * @member {string} md5
                 * @memberof M12.M121.M1211.M12111
                 * @instance
                 */
                M12111.prototype.md5 = "";

                /**
                 * M12111 sha1.
                 * @member {string} sha1
                 * @memberof M12.M121.M1211.M12111
                 * @instance
                 */
                M12111.prototype.sha1 = "";

                /**
                 * M12111 name.
                 * @member {string} name
                 * @memberof M12.M121.M1211.M12111
                 * @instance
                 */
                M12111.prototype.name = "";

                /**
                 * M12111 field5.
                 * @member {M12.M121.M1211.M12111.IMessage1215|null|undefined} field5
                 * @memberof M12.M121.M1211.M12111
                 * @instance
                 */
                M12111.prototype.field5 = null;

                /**
                 * M12111 width.
                 * @member {number} width
                 * @memberof M12.M121.M1211.M12111
                 * @instance
                 */
                M12111.prototype.width = 0;

                /**
                 * M12111 height.
                 * @member {number} height
                 * @memberof M12.M121.M1211.M12111
                 * @instance
                 */
                M12111.prototype.height = 0;

                /**
                 * M12111 field9.
                 * @member {number} field9
                 * @memberof M12.M121.M1211.M12111
                 * @instance
                 */
                M12111.prototype.field9 = 0;

                /**
                 * Creates a new M12111 instance using the specified properties.
                 * @function create
                 * @memberof M12.M121.M1211.M12111
                 * @static
                 * @param {M12.M121.M1211.IM12111=} [properties] Properties to set
                 * @returns {M12.M121.M1211.M12111} M12111 instance
                 */
                M12111.create = function create(properties) {
                    return new M12111(properties);
                };

                /**
                 * Encodes the specified M12111 message. Does not implicitly {@link M12.M121.M1211.M12111.verify|verify} messages.
                 * @function encode
                 * @memberof M12.M121.M1211.M12111
                 * @static
                 * @param {M12.M121.M1211.IM12111} message M12111 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                M12111.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.field1);
                    if (message.md5 != null && Object.hasOwnProperty.call(message, "md5"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.md5);
                    if (message.sha1 != null && Object.hasOwnProperty.call(message, "sha1"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.sha1);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                    if (message.field5 != null && Object.hasOwnProperty.call(message, "field5"))
                        $root.M12.M121.M1211.M12111.Message1215.encode(message.field5, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.width);
                    if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int32(message.height);
                    if (message.field9 != null && Object.hasOwnProperty.call(message, "field9"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.field9);
                    return writer;
                };

                /**
                 * Encodes the specified M12111 message, length delimited. Does not implicitly {@link M12.M121.M1211.M12111.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof M12.M121.M1211.M12111
                 * @static
                 * @param {M12.M121.M1211.IM12111} message M12111 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                M12111.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a M12111 message from the specified reader or buffer.
                 * @function decode
                 * @memberof M12.M121.M1211.M12111
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {M12.M121.M1211.M12111} M12111
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                M12111.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M121.M1211.M12111();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.field1 = reader.int32();
                                break;
                            }
                        case 2: {
                                message.md5 = reader.string();
                                break;
                            }
                        case 3: {
                                message.sha1 = reader.string();
                                break;
                            }
                        case 4: {
                                message.name = reader.string();
                                break;
                            }
                        case 5: {
                                message.field5 = $root.M12.M121.M1211.M12111.Message1215.decode(reader, reader.uint32());
                                break;
                            }
                        case 6: {
                                message.width = reader.int32();
                                break;
                            }
                        case 7: {
                                message.height = reader.int32();
                                break;
                            }
                        case 9: {
                                message.field9 = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a M12111 message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof M12.M121.M1211.M12111
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {M12.M121.M1211.M12111} M12111
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                M12111.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a M12111 message.
                 * @function verify
                 * @memberof M12.M121.M1211.M12111
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                M12111.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.field1 != null && message.hasOwnProperty("field1"))
                        if (!$util.isInteger(message.field1))
                            return "field1: integer expected";
                    if (message.md5 != null && message.hasOwnProperty("md5"))
                        if (!$util.isString(message.md5))
                            return "md5: string expected";
                    if (message.sha1 != null && message.hasOwnProperty("sha1"))
                        if (!$util.isString(message.sha1))
                            return "sha1: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field5 != null && message.hasOwnProperty("field5")) {
                        let error = $root.M12.M121.M1211.M12111.Message1215.verify(message.field5);
                        if (error)
                            return "field5." + error;
                    }
                    if (message.width != null && message.hasOwnProperty("width"))
                        if (!$util.isInteger(message.width))
                            return "width: integer expected";
                    if (message.height != null && message.hasOwnProperty("height"))
                        if (!$util.isInteger(message.height))
                            return "height: integer expected";
                    if (message.field9 != null && message.hasOwnProperty("field9"))
                        if (!$util.isInteger(message.field9))
                            return "field9: integer expected";
                    return null;
                };

                /**
                 * Creates a M12111 message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof M12.M121.M1211.M12111
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {M12.M121.M1211.M12111} M12111
                 */
                M12111.fromObject = function fromObject(object) {
                    if (object instanceof $root.M12.M121.M1211.M12111)
                        return object;
                    let message = new $root.M12.M121.M1211.M12111();
                    if (object.field1 != null)
                        message.field1 = object.field1 | 0;
                    if (object.md5 != null)
                        message.md5 = String(object.md5);
                    if (object.sha1 != null)
                        message.sha1 = String(object.sha1);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field5 != null) {
                        if (typeof object.field5 !== "object")
                            throw TypeError(".M12.M121.M1211.M12111.field5: object expected");
                        message.field5 = $root.M12.M121.M1211.M12111.Message1215.fromObject(object.field5);
                    }
                    if (object.width != null)
                        message.width = object.width | 0;
                    if (object.height != null)
                        message.height = object.height | 0;
                    if (object.field9 != null)
                        message.field9 = object.field9 | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a M12111 message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof M12.M121.M1211.M12111
                 * @static
                 * @param {M12.M121.M1211.M12111} message M12111
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                M12111.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.field1 = 0;
                        object.md5 = "";
                        object.sha1 = "";
                        object.name = "";
                        object.field5 = null;
                        object.width = 0;
                        object.height = 0;
                        object.field9 = 0;
                    }
                    if (message.field1 != null && message.hasOwnProperty("field1"))
                        object.field1 = message.field1;
                    if (message.md5 != null && message.hasOwnProperty("md5"))
                        object.md5 = message.md5;
                    if (message.sha1 != null && message.hasOwnProperty("sha1"))
                        object.sha1 = message.sha1;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field5 != null && message.hasOwnProperty("field5"))
                        object.field5 = $root.M12.M121.M1211.M12111.Message1215.toObject(message.field5, options);
                    if (message.width != null && message.hasOwnProperty("width"))
                        object.width = message.width;
                    if (message.height != null && message.hasOwnProperty("height"))
                        object.height = message.height;
                    if (message.field9 != null && message.hasOwnProperty("field9"))
                        object.field9 = message.field9;
                    return object;
                };

                /**
                 * Converts this M12111 to JSON.
                 * @function toJSON
                 * @memberof M12.M121.M1211.M12111
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                M12111.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for M12111
                 * @function getTypeUrl
                 * @memberof M12.M121.M1211.M12111
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                M12111.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/M12.M121.M1211.M12111";
                };

                M12111.Message1215 = (function() {

                    /**
                     * Properties of a Message1215.
                     * @memberof M12.M121.M1211.M12111
                     * @interface IMessage1215
                     * @property {number|null} [field1] Message1215 field1
                     * @property {number|null} [field2] Message1215 field2
                     */

                    /**
                     * Constructs a new Message1215.
                     * @memberof M12.M121.M1211.M12111
                     * @classdesc Represents a Message1215.
                     * @implements IMessage1215
                     * @constructor
                     * @param {M12.M121.M1211.M12111.IMessage1215=} [properties] Properties to set
                     */
                    function Message1215(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Message1215 field1.
                     * @member {number} field1
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @instance
                     */
                    Message1215.prototype.field1 = 0;

                    /**
                     * Message1215 field2.
                     * @member {number} field2
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @instance
                     */
                    Message1215.prototype.field2 = 0;

                    /**
                     * Creates a new Message1215 instance using the specified properties.
                     * @function create
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @static
                     * @param {M12.M121.M1211.M12111.IMessage1215=} [properties] Properties to set
                     * @returns {M12.M121.M1211.M12111.Message1215} Message1215 instance
                     */
                    Message1215.create = function create(properties) {
                        return new Message1215(properties);
                    };

                    /**
                     * Encodes the specified Message1215 message. Does not implicitly {@link M12.M121.M1211.M12111.Message1215.verify|verify} messages.
                     * @function encode
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @static
                     * @param {M12.M121.M1211.M12111.IMessage1215} message Message1215 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Message1215.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.field1);
                        if (message.field2 != null && Object.hasOwnProperty.call(message, "field2"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.field2);
                        return writer;
                    };

                    /**
                     * Encodes the specified Message1215 message, length delimited. Does not implicitly {@link M12.M121.M1211.M12111.Message1215.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @static
                     * @param {M12.M121.M1211.M12111.IMessage1215} message Message1215 message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Message1215.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Message1215 message from the specified reader or buffer.
                     * @function decode
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {M12.M121.M1211.M12111.Message1215} Message1215
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Message1215.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M121.M1211.M12111.Message1215();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.field1 = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.field2 = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Message1215 message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {M12.M121.M1211.M12111.Message1215} Message1215
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Message1215.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Message1215 message.
                     * @function verify
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Message1215.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.field1 != null && message.hasOwnProperty("field1"))
                            if (!$util.isInteger(message.field1))
                                return "field1: integer expected";
                        if (message.field2 != null && message.hasOwnProperty("field2"))
                            if (!$util.isInteger(message.field2))
                                return "field2: integer expected";
                        return null;
                    };

                    /**
                     * Creates a Message1215 message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {M12.M121.M1211.M12111.Message1215} Message1215
                     */
                    Message1215.fromObject = function fromObject(object) {
                        if (object instanceof $root.M12.M121.M1211.M12111.Message1215)
                            return object;
                        let message = new $root.M12.M121.M1211.M12111.Message1215();
                        if (object.field1 != null)
                            message.field1 = object.field1 | 0;
                        if (object.field2 != null)
                            message.field2 = object.field2 | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Message1215 message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @static
                     * @param {M12.M121.M1211.M12111.Message1215} message Message1215
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Message1215.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.field1 = 0;
                            object.field2 = 0;
                        }
                        if (message.field1 != null && message.hasOwnProperty("field1"))
                            object.field1 = message.field1;
                        if (message.field2 != null && message.hasOwnProperty("field2"))
                            object.field2 = message.field2;
                        return object;
                    };

                    /**
                     * Converts this Message1215 to JSON.
                     * @function toJSON
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Message1215.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Message1215
                     * @function getTypeUrl
                     * @memberof M12.M121.M1211.M12111.Message1215
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Message1215.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/M12.M121.M1211.M12111.Message1215";
                    };

                    return Message1215;
                })();

                return M12111;
            })();

            return M1211;
        })();

        M121.M1212 = (function() {

            /**
             * Properties of a M1212.
             * @memberof M12.M121
             * @interface IM1212
             * @property {string|null} [path] M1212 path
             * @property {M12.M121.M1212.ISpec|null} [spec] M1212 spec
             * @property {string|null} [host] M1212 host
             */

            /**
             * Constructs a new M1212.
             * @memberof M12.M121
             * @classdesc Represents a M1212.
             * @implements IM1212
             * @constructor
             * @param {M12.M121.IM1212=} [properties] Properties to set
             */
            function M1212(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * M1212 path.
             * @member {string} path
             * @memberof M12.M121.M1212
             * @instance
             */
            M1212.prototype.path = "";

            /**
             * M1212 spec.
             * @member {M12.M121.M1212.ISpec|null|undefined} spec
             * @memberof M12.M121.M1212
             * @instance
             */
            M1212.prototype.spec = null;

            /**
             * M1212 host.
             * @member {string} host
             * @memberof M12.M121.M1212
             * @instance
             */
            M1212.prototype.host = "";

            /**
             * Creates a new M1212 instance using the specified properties.
             * @function create
             * @memberof M12.M121.M1212
             * @static
             * @param {M12.M121.IM1212=} [properties] Properties to set
             * @returns {M12.M121.M1212} M1212 instance
             */
            M1212.create = function create(properties) {
                return new M1212(properties);
            };

            /**
             * Encodes the specified M1212 message. Does not implicitly {@link M12.M121.M1212.verify|verify} messages.
             * @function encode
             * @memberof M12.M121.M1212
             * @static
             * @param {M12.M121.IM1212} message M1212 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            M1212.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
                if (message.spec != null && Object.hasOwnProperty.call(message, "spec"))
                    $root.M12.M121.M1212.Spec.encode(message.spec, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.host);
                return writer;
            };

            /**
             * Encodes the specified M1212 message, length delimited. Does not implicitly {@link M12.M121.M1212.verify|verify} messages.
             * @function encodeDelimited
             * @memberof M12.M121.M1212
             * @static
             * @param {M12.M121.IM1212} message M1212 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            M1212.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a M1212 message from the specified reader or buffer.
             * @function decode
             * @memberof M12.M121.M1212
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {M12.M121.M1212} M1212
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            M1212.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M121.M1212();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.path = reader.string();
                            break;
                        }
                    case 2: {
                            message.spec = $root.M12.M121.M1212.Spec.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.host = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a M1212 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof M12.M121.M1212
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {M12.M121.M1212} M1212
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            M1212.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a M1212 message.
             * @function verify
             * @memberof M12.M121.M1212
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            M1212.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                if (message.spec != null && message.hasOwnProperty("spec")) {
                    let error = $root.M12.M121.M1212.Spec.verify(message.spec);
                    if (error)
                        return "spec." + error;
                }
                if (message.host != null && message.hasOwnProperty("host"))
                    if (!$util.isString(message.host))
                        return "host: string expected";
                return null;
            };

            /**
             * Creates a M1212 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof M12.M121.M1212
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {M12.M121.M1212} M1212
             */
            M1212.fromObject = function fromObject(object) {
                if (object instanceof $root.M12.M121.M1212)
                    return object;
                let message = new $root.M12.M121.M1212();
                if (object.path != null)
                    message.path = String(object.path);
                if (object.spec != null) {
                    if (typeof object.spec !== "object")
                        throw TypeError(".M12.M121.M1212.spec: object expected");
                    message.spec = $root.M12.M121.M1212.Spec.fromObject(object.spec);
                }
                if (object.host != null)
                    message.host = String(object.host);
                return message;
            };

            /**
             * Creates a plain object from a M1212 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof M12.M121.M1212
             * @static
             * @param {M12.M121.M1212} message M1212
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            M1212.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.path = "";
                    object.spec = null;
                    object.host = "";
                }
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                if (message.spec != null && message.hasOwnProperty("spec"))
                    object.spec = $root.M12.M121.M1212.Spec.toObject(message.spec, options);
                if (message.host != null && message.hasOwnProperty("host"))
                    object.host = message.host;
                return object;
            };

            /**
             * Converts this M1212 to JSON.
             * @function toJSON
             * @memberof M12.M121.M1212
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            M1212.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for M1212
             * @function getTypeUrl
             * @memberof M12.M121.M1212
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            M1212.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/M12.M121.M1212";
            };

            M1212.Spec = (function() {

                /**
                 * Properties of a Spec.
                 * @memberof M12.M121.M1212
                 * @interface ISpec
                 * @property {string|null} [spec1] Spec spec1
                 * @property {string|null} [spec2] Spec spec2
                 * @property {string|null} [spec3] Spec spec3
                 */

                /**
                 * Constructs a new Spec.
                 * @memberof M12.M121.M1212
                 * @classdesc Represents a Spec.
                 * @implements ISpec
                 * @constructor
                 * @param {M12.M121.M1212.ISpec=} [properties] Properties to set
                 */
                function Spec(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Spec spec1.
                 * @member {string} spec1
                 * @memberof M12.M121.M1212.Spec
                 * @instance
                 */
                Spec.prototype.spec1 = "";

                /**
                 * Spec spec2.
                 * @member {string} spec2
                 * @memberof M12.M121.M1212.Spec
                 * @instance
                 */
                Spec.prototype.spec2 = "";

                /**
                 * Spec spec3.
                 * @member {string} spec3
                 * @memberof M12.M121.M1212.Spec
                 * @instance
                 */
                Spec.prototype.spec3 = "";

                /**
                 * Creates a new Spec instance using the specified properties.
                 * @function create
                 * @memberof M12.M121.M1212.Spec
                 * @static
                 * @param {M12.M121.M1212.ISpec=} [properties] Properties to set
                 * @returns {M12.M121.M1212.Spec} Spec instance
                 */
                Spec.create = function create(properties) {
                    return new Spec(properties);
                };

                /**
                 * Encodes the specified Spec message. Does not implicitly {@link M12.M121.M1212.Spec.verify|verify} messages.
                 * @function encode
                 * @memberof M12.M121.M1212.Spec
                 * @static
                 * @param {M12.M121.M1212.ISpec} message Spec message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Spec.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.spec1 != null && Object.hasOwnProperty.call(message, "spec1"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.spec1);
                    if (message.spec2 != null && Object.hasOwnProperty.call(message, "spec2"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.spec2);
                    if (message.spec3 != null && Object.hasOwnProperty.call(message, "spec3"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.spec3);
                    return writer;
                };

                /**
                 * Encodes the specified Spec message, length delimited. Does not implicitly {@link M12.M121.M1212.Spec.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof M12.M121.M1212.Spec
                 * @static
                 * @param {M12.M121.M1212.ISpec} message Spec message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Spec.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Spec message from the specified reader or buffer.
                 * @function decode
                 * @memberof M12.M121.M1212.Spec
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {M12.M121.M1212.Spec} Spec
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Spec.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M121.M1212.Spec();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.spec1 = reader.string();
                                break;
                            }
                        case 2: {
                                message.spec2 = reader.string();
                                break;
                            }
                        case 3: {
                                message.spec3 = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Spec message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof M12.M121.M1212.Spec
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {M12.M121.M1212.Spec} Spec
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Spec.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Spec message.
                 * @function verify
                 * @memberof M12.M121.M1212.Spec
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Spec.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.spec1 != null && message.hasOwnProperty("spec1"))
                        if (!$util.isString(message.spec1))
                            return "spec1: string expected";
                    if (message.spec2 != null && message.hasOwnProperty("spec2"))
                        if (!$util.isString(message.spec2))
                            return "spec2: string expected";
                    if (message.spec3 != null && message.hasOwnProperty("spec3"))
                        if (!$util.isString(message.spec3))
                            return "spec3: string expected";
                    return null;
                };

                /**
                 * Creates a Spec message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof M12.M121.M1212.Spec
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {M12.M121.M1212.Spec} Spec
                 */
                Spec.fromObject = function fromObject(object) {
                    if (object instanceof $root.M12.M121.M1212.Spec)
                        return object;
                    let message = new $root.M12.M121.M1212.Spec();
                    if (object.spec1 != null)
                        message.spec1 = String(object.spec1);
                    if (object.spec2 != null)
                        message.spec2 = String(object.spec2);
                    if (object.spec3 != null)
                        message.spec3 = String(object.spec3);
                    return message;
                };

                /**
                 * Creates a plain object from a Spec message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof M12.M121.M1212.Spec
                 * @static
                 * @param {M12.M121.M1212.Spec} message Spec
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Spec.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.spec1 = "";
                        object.spec2 = "";
                        object.spec3 = "";
                    }
                    if (message.spec1 != null && message.hasOwnProperty("spec1"))
                        object.spec1 = message.spec1;
                    if (message.spec2 != null && message.hasOwnProperty("spec2"))
                        object.spec2 = message.spec2;
                    if (message.spec3 != null && message.hasOwnProperty("spec3"))
                        object.spec3 = message.spec3;
                    return object;
                };

                /**
                 * Converts this Spec to JSON.
                 * @function toJSON
                 * @memberof M12.M121.M1212.Spec
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Spec.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Spec
                 * @function getTypeUrl
                 * @memberof M12.M121.M1212.Spec
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Spec.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/M12.M121.M1212.Spec";
                };

                return Spec;
            })();

            return M1212;
        })();

        M121.M1267 = (function() {

            /**
             * Properties of a M1267.
             * @memberof M12.M121
             * @interface IM1267
             * @property {number|null} [field102] M1267 field102
             * @property {number|null} [field200] M1267 field200
             * @property {M12.M121.M1267.IGroup|null} [group] M1267 group
             */

            /**
             * Constructs a new M1267.
             * @memberof M12.M121
             * @classdesc Represents a M1267.
             * @implements IM1267
             * @constructor
             * @param {M12.M121.IM1267=} [properties] Properties to set
             */
            function M1267(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * M1267 field102.
             * @member {number} field102
             * @memberof M12.M121.M1267
             * @instance
             */
            M1267.prototype.field102 = 0;

            /**
             * M1267 field200.
             * @member {number} field200
             * @memberof M12.M121.M1267
             * @instance
             */
            M1267.prototype.field200 = 0;

            /**
             * M1267 group.
             * @member {M12.M121.M1267.IGroup|null|undefined} group
             * @memberof M12.M121.M1267
             * @instance
             */
            M1267.prototype.group = null;

            /**
             * Creates a new M1267 instance using the specified properties.
             * @function create
             * @memberof M12.M121.M1267
             * @static
             * @param {M12.M121.IM1267=} [properties] Properties to set
             * @returns {M12.M121.M1267} M1267 instance
             */
            M1267.create = function create(properties) {
                return new M1267(properties);
            };

            /**
             * Encodes the specified M1267 message. Does not implicitly {@link M12.M121.M1267.verify|verify} messages.
             * @function encode
             * @memberof M12.M121.M1267
             * @static
             * @param {M12.M121.IM1267} message M1267 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            M1267.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.field102 != null && Object.hasOwnProperty.call(message, "field102"))
                    writer.uint32(/* id 102, wireType 0 =*/816).int32(message.field102);
                if (message.field200 != null && Object.hasOwnProperty.call(message, "field200"))
                    writer.uint32(/* id 200, wireType 0 =*/1600).int32(message.field200);
                if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                    $root.M12.M121.M1267.Group.encode(message.group, writer.uint32(/* id 202, wireType 2 =*/1618).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified M1267 message, length delimited. Does not implicitly {@link M12.M121.M1267.verify|verify} messages.
             * @function encodeDelimited
             * @memberof M12.M121.M1267
             * @static
             * @param {M12.M121.IM1267} message M1267 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            M1267.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a M1267 message from the specified reader or buffer.
             * @function decode
             * @memberof M12.M121.M1267
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {M12.M121.M1267} M1267
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            M1267.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M121.M1267();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 102: {
                            message.field102 = reader.int32();
                            break;
                        }
                    case 200: {
                            message.field200 = reader.int32();
                            break;
                        }
                    case 202: {
                            message.group = $root.M12.M121.M1267.Group.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a M1267 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof M12.M121.M1267
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {M12.M121.M1267} M1267
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            M1267.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a M1267 message.
             * @function verify
             * @memberof M12.M121.M1267
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            M1267.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.field102 != null && message.hasOwnProperty("field102"))
                    if (!$util.isInteger(message.field102))
                        return "field102: integer expected";
                if (message.field200 != null && message.hasOwnProperty("field200"))
                    if (!$util.isInteger(message.field200))
                        return "field200: integer expected";
                if (message.group != null && message.hasOwnProperty("group")) {
                    let error = $root.M12.M121.M1267.Group.verify(message.group);
                    if (error)
                        return "group." + error;
                }
                return null;
            };

            /**
             * Creates a M1267 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof M12.M121.M1267
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {M12.M121.M1267} M1267
             */
            M1267.fromObject = function fromObject(object) {
                if (object instanceof $root.M12.M121.M1267)
                    return object;
                let message = new $root.M12.M121.M1267();
                if (object.field102 != null)
                    message.field102 = object.field102 | 0;
                if (object.field200 != null)
                    message.field200 = object.field200 | 0;
                if (object.group != null) {
                    if (typeof object.group !== "object")
                        throw TypeError(".M12.M121.M1267.group: object expected");
                    message.group = $root.M12.M121.M1267.Group.fromObject(object.group);
                }
                return message;
            };

            /**
             * Creates a plain object from a M1267 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof M12.M121.M1267
             * @static
             * @param {M12.M121.M1267} message M1267
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            M1267.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.field102 = 0;
                    object.field200 = 0;
                    object.group = null;
                }
                if (message.field102 != null && message.hasOwnProperty("field102"))
                    object.field102 = message.field102;
                if (message.field200 != null && message.hasOwnProperty("field200"))
                    object.field200 = message.field200;
                if (message.group != null && message.hasOwnProperty("group"))
                    object.group = $root.M12.M121.M1267.Group.toObject(message.group, options);
                return object;
            };

            /**
             * Converts this M1267 to JSON.
             * @function toJSON
             * @memberof M12.M121.M1267
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            M1267.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for M1267
             * @function getTypeUrl
             * @memberof M12.M121.M1267
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            M1267.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/M12.M121.M1267";
            };

            M1267.Group = (function() {

                /**
                 * Properties of a Group.
                 * @memberof M12.M121.M1267
                 * @interface IGroup
                 * @property {number|null} [group_id] Group group_id
                 */

                /**
                 * Constructs a new Group.
                 * @memberof M12.M121.M1267
                 * @classdesc Represents a Group.
                 * @implements IGroup
                 * @constructor
                 * @param {M12.M121.M1267.IGroup=} [properties] Properties to set
                 */
                function Group(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Group group_id.
                 * @member {number} group_id
                 * @memberof M12.M121.M1267.Group
                 * @instance
                 */
                Group.prototype.group_id = 0;

                /**
                 * Creates a new Group instance using the specified properties.
                 * @function create
                 * @memberof M12.M121.M1267.Group
                 * @static
                 * @param {M12.M121.M1267.IGroup=} [properties] Properties to set
                 * @returns {M12.M121.M1267.Group} Group instance
                 */
                Group.create = function create(properties) {
                    return new Group(properties);
                };

                /**
                 * Encodes the specified Group message. Does not implicitly {@link M12.M121.M1267.Group.verify|verify} messages.
                 * @function encode
                 * @memberof M12.M121.M1267.Group
                 * @static
                 * @param {M12.M121.M1267.IGroup} message Group message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Group.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.group_id != null && Object.hasOwnProperty.call(message, "group_id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.group_id);
                    return writer;
                };

                /**
                 * Encodes the specified Group message, length delimited. Does not implicitly {@link M12.M121.M1267.Group.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof M12.M121.M1267.Group
                 * @static
                 * @param {M12.M121.M1267.IGroup} message Group message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Group.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Group message from the specified reader or buffer.
                 * @function decode
                 * @memberof M12.M121.M1267.Group
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {M12.M121.M1267.Group} Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Group.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M121.M1267.Group();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.group_id = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Group message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof M12.M121.M1267.Group
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {M12.M121.M1267.Group} Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Group.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Group message.
                 * @function verify
                 * @memberof M12.M121.M1267.Group
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Group.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.group_id != null && message.hasOwnProperty("group_id"))
                        if (!$util.isInteger(message.group_id))
                            return "group_id: integer expected";
                    return null;
                };

                /**
                 * Creates a Group message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof M12.M121.M1267.Group
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {M12.M121.M1267.Group} Group
                 */
                Group.fromObject = function fromObject(object) {
                    if (object instanceof $root.M12.M121.M1267.Group)
                        return object;
                    let message = new $root.M12.M121.M1267.Group();
                    if (object.group_id != null)
                        message.group_id = object.group_id | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Group message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof M12.M121.M1267.Group
                 * @static
                 * @param {M12.M121.M1267.Group} message Group
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Group.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.group_id = 0;
                    if (message.group_id != null && message.hasOwnProperty("group_id"))
                        object.group_id = message.group_id;
                    return object;
                };

                /**
                 * Converts this Group to JSON.
                 * @function toJSON
                 * @memberof M12.M121.M1267.Group
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Group.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Group
                 * @function getTypeUrl
                 * @memberof M12.M121.M1267.Group
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Group.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/M12.M121.M1267.Group";
                };

                return Group;
            })();

            return M1267;
        })();

        return M121;
    })();

    M12.M122 = (function() {

        /**
         * Properties of a M122.
         * @memberof M12
         * @interface IM122
         * @property {M12.M122.IM1221|null} [field1] M122 field1
         * @property {number|null} [field10] M122 field10
         */

        /**
         * Constructs a new M122.
         * @memberof M12
         * @classdesc Represents a M122.
         * @implements IM122
         * @constructor
         * @param {M12.IM122=} [properties] Properties to set
         */
        function M122(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * M122 field1.
         * @member {M12.M122.IM1221|null|undefined} field1
         * @memberof M12.M122
         * @instance
         */
        M122.prototype.field1 = null;

        /**
         * M122 field10.
         * @member {number} field10
         * @memberof M12.M122
         * @instance
         */
        M122.prototype.field10 = 0;

        /**
         * Creates a new M122 instance using the specified properties.
         * @function create
         * @memberof M12.M122
         * @static
         * @param {M12.IM122=} [properties] Properties to set
         * @returns {M12.M122} M122 instance
         */
        M122.create = function create(properties) {
            return new M122(properties);
        };

        /**
         * Encodes the specified M122 message. Does not implicitly {@link M12.M122.verify|verify} messages.
         * @function encode
         * @memberof M12.M122
         * @static
         * @param {M12.IM122} message M122 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M122.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
                $root.M12.M122.M1221.encode(message.field1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.field10 != null && Object.hasOwnProperty.call(message, "field10"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.field10);
            return writer;
        };

        /**
         * Encodes the specified M122 message, length delimited. Does not implicitly {@link M12.M122.verify|verify} messages.
         * @function encodeDelimited
         * @memberof M12.M122
         * @static
         * @param {M12.IM122} message M122 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        M122.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a M122 message from the specified reader or buffer.
         * @function decode
         * @memberof M12.M122
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {M12.M122} M122
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M122.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M122();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.field1 = $root.M12.M122.M1221.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.field10 = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a M122 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof M12.M122
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {M12.M122} M122
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        M122.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a M122 message.
         * @function verify
         * @memberof M12.M122
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        M122.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.field1 != null && message.hasOwnProperty("field1")) {
                let error = $root.M12.M122.M1221.verify(message.field1);
                if (error)
                    return "field1." + error;
            }
            if (message.field10 != null && message.hasOwnProperty("field10"))
                if (!$util.isInteger(message.field10))
                    return "field10: integer expected";
            return null;
        };

        /**
         * Creates a M122 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof M12.M122
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {M12.M122} M122
         */
        M122.fromObject = function fromObject(object) {
            if (object instanceof $root.M12.M122)
                return object;
            let message = new $root.M12.M122();
            if (object.field1 != null) {
                if (typeof object.field1 !== "object")
                    throw TypeError(".M12.M122.field1: object expected");
                message.field1 = $root.M12.M122.M1221.fromObject(object.field1);
            }
            if (object.field10 != null)
                message.field10 = object.field10 | 0;
            return message;
        };

        /**
         * Creates a plain object from a M122 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof M12.M122
         * @static
         * @param {M12.M122} message M122
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        M122.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.field1 = null;
                object.field10 = 0;
            }
            if (message.field1 != null && message.hasOwnProperty("field1"))
                object.field1 = $root.M12.M122.M1221.toObject(message.field1, options);
            if (message.field10 != null && message.hasOwnProperty("field10"))
                object.field10 = message.field10;
            return object;
        };

        /**
         * Converts this M122 to JSON.
         * @function toJSON
         * @memberof M12.M122
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        M122.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for M122
         * @function getTypeUrl
         * @memberof M12.M122
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        M122.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/M12.M122";
        };

        M122.M1221 = (function() {

            /**
             * Properties of a M1221.
             * @memberof M12.M122
             * @interface IM1221
             * @property {number|null} [field1001] M1221 field1001
             * @property {number|null} [field1002] M1221 field1002
             * @property {number|null} [field1003] M1221 field1003
             */

            /**
             * Constructs a new M1221.
             * @memberof M12.M122
             * @classdesc Represents a M1221.
             * @implements IM1221
             * @constructor
             * @param {M12.M122.IM1221=} [properties] Properties to set
             */
            function M1221(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * M1221 field1001.
             * @member {number} field1001
             * @memberof M12.M122.M1221
             * @instance
             */
            M1221.prototype.field1001 = 0;

            /**
             * M1221 field1002.
             * @member {number} field1002
             * @memberof M12.M122.M1221
             * @instance
             */
            M1221.prototype.field1002 = 0;

            /**
             * M1221 field1003.
             * @member {number} field1003
             * @memberof M12.M122.M1221
             * @instance
             */
            M1221.prototype.field1003 = 0;

            /**
             * Creates a new M1221 instance using the specified properties.
             * @function create
             * @memberof M12.M122.M1221
             * @static
             * @param {M12.M122.IM1221=} [properties] Properties to set
             * @returns {M12.M122.M1221} M1221 instance
             */
            M1221.create = function create(properties) {
                return new M1221(properties);
            };

            /**
             * Encodes the specified M1221 message. Does not implicitly {@link M12.M122.M1221.verify|verify} messages.
             * @function encode
             * @memberof M12.M122.M1221
             * @static
             * @param {M12.M122.IM1221} message M1221 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            M1221.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.field1001 != null && Object.hasOwnProperty.call(message, "field1001"))
                    writer.uint32(/* id 1001, wireType 0 =*/8008).int32(message.field1001);
                if (message.field1002 != null && Object.hasOwnProperty.call(message, "field1002"))
                    writer.uint32(/* id 1002, wireType 0 =*/8016).int32(message.field1002);
                if (message.field1003 != null && Object.hasOwnProperty.call(message, "field1003"))
                    writer.uint32(/* id 1003, wireType 0 =*/8024).int32(message.field1003);
                return writer;
            };

            /**
             * Encodes the specified M1221 message, length delimited. Does not implicitly {@link M12.M122.M1221.verify|verify} messages.
             * @function encodeDelimited
             * @memberof M12.M122.M1221
             * @static
             * @param {M12.M122.IM1221} message M1221 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            M1221.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a M1221 message from the specified reader or buffer.
             * @function decode
             * @memberof M12.M122.M1221
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {M12.M122.M1221} M1221
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            M1221.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.M12.M122.M1221();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1001: {
                            message.field1001 = reader.int32();
                            break;
                        }
                    case 1002: {
                            message.field1002 = reader.int32();
                            break;
                        }
                    case 1003: {
                            message.field1003 = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a M1221 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof M12.M122.M1221
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {M12.M122.M1221} M1221
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            M1221.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a M1221 message.
             * @function verify
             * @memberof M12.M122.M1221
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            M1221.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.field1001 != null && message.hasOwnProperty("field1001"))
                    if (!$util.isInteger(message.field1001))
                        return "field1001: integer expected";
                if (message.field1002 != null && message.hasOwnProperty("field1002"))
                    if (!$util.isInteger(message.field1002))
                        return "field1002: integer expected";
                if (message.field1003 != null && message.hasOwnProperty("field1003"))
                    if (!$util.isInteger(message.field1003))
                        return "field1003: integer expected";
                return null;
            };

            /**
             * Creates a M1221 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof M12.M122.M1221
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {M12.M122.M1221} M1221
             */
            M1221.fromObject = function fromObject(object) {
                if (object instanceof $root.M12.M122.M1221)
                    return object;
                let message = new $root.M12.M122.M1221();
                if (object.field1001 != null)
                    message.field1001 = object.field1001 | 0;
                if (object.field1002 != null)
                    message.field1002 = object.field1002 | 0;
                if (object.field1003 != null)
                    message.field1003 = object.field1003 | 0;
                return message;
            };

            /**
             * Creates a plain object from a M1221 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof M12.M122.M1221
             * @static
             * @param {M12.M122.M1221} message M1221
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            M1221.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.field1001 = 0;
                    object.field1002 = 0;
                    object.field1003 = 0;
                }
                if (message.field1001 != null && message.hasOwnProperty("field1001"))
                    object.field1001 = message.field1001;
                if (message.field1002 != null && message.hasOwnProperty("field1002"))
                    object.field1002 = message.field1002;
                if (message.field1003 != null && message.hasOwnProperty("field1003"))
                    object.field1003 = message.field1003;
                return object;
            };

            /**
             * Converts this M1221 to JSON.
             * @function toJSON
             * @memberof M12.M122.M1221
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            M1221.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for M1221
             * @function getTypeUrl
             * @memberof M12.M122.M1221
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            M1221.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/M12.M122.M1221";
            };

            return M1221;
        })();

        return M122;
    })();

    return M12;
})();

export { $root as default };
