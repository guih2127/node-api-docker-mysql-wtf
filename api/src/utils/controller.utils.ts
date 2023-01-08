import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import express from 'express';
import BaseResult from '../results/base.result';
import FailResult from '../results/fail.result';
import SuccessResult from '../results/success.result';

class ValidationResult {
    data: any;
    error: any;
};

export async function SendControllerResponse(res: express.Response, result: BaseResult<any>): Promise<void> {
    if (result instanceof SuccessResult)
        res.status(result.statusCode).send(result.responseObject);
    else if (result instanceof FailResult)
        res.status(result.statusCode).json({ message: result.message }).send();
    else
        res.status(500).json({ message: "An unexpected error hapenned."}).send();
};

export async function ValidateBody(classToConvert: any, body: string): Promise<ValidationResult> {
    const result = new ValidationResult();
    result.data = plainToClass(classToConvert, body);

    await validate(result.data, { skipMissingProperties: true }).then(errors => {
        if (errors.length) {
            let errorTexts = Array();

            for (const errorItem of errors) {
                errorTexts = errorTexts.concat(errorItem.constraints);
            };

            result.error = errorTexts;
        };
    });

    return result;
};

export async function ValidateBodyAndThrowErrorsIfNecessary(dto: any, req: express.Request, res: express.Response): Promise<void> {
    const conversionResult = await ValidateBody(dto, req.body);

    if (conversionResult.error) {
        res.status(400).send(conversionResult.error);
    };
};