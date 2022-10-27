import formidable, { Files } from "formidable";
export const uploadDir = "uploads";
import express from "express";
import fs from "fs";

fs.mkdirSync(uploadDir, { recursive: true });
fs.mkdirSync(uploadDir, { recursive: true });

const form = formidable({
    uploadDir: uploadDir,
    keepExtensions: true,
    maxFiles: 10,
    maxFileSize: 1000 * 1024 ** 2, // the default limit is 200KB
    filter: (part) => {
        if (part && part.mimetype) {
            // console.log(part)
            const type = part.mimetype;
            if (type.startsWith("image/")) {
                return true;
            }
        }

        return false;
    },
    filename: (originalName, originalExt, part, form) => {
        let ext = part.mimetype?.split("/").pop();
        let mathRandom = Math.random();
        return `Cls-${mathRandom}.${ext}`;
    },
});

export const formParse = (
    req: express.Request
): Promise<{
    fields: any;
    files: Files;
}> => {
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files: Files) => {
            try {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve({
                    files,
                    fields,
                });
            } catch (error) {
                console.log("form parse error", error);
                reject(error);
            }
        });
    });
};
