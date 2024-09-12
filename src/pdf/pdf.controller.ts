import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get()
  generatePdf(
    @Query('science') science: number,
    @Query('geography') geography: number,
    @Query('siviks') siviks: number,
    @Query('culture') culture: number,
    @Query('tehnology') tehnology: number,
    @Query('physical_science') physicalScience: number,
    @Query('earth_science') earthScience: number,
    @Query('investigation') investigation: number,
    @Query('writing') writing: number,
    @Query('reading') reading: number,
    @Query('concept') concept: number,
    @Query('alphabetic') alphabetic: number,
    @Query('comunication') comunication: number,
    @Query('photological') photological: number,
    @Query('listening') listening: number,
    @Query('logic') logic: number,
    @Query('compare') compare: number,
    @Query('pattern') pattern: number,
    @Query('measurement') measurement: number,
    @Query('shapes') shapes: number,
    @Query('spatal') spatal: number,
    @Query('numberSense') numberSense: number,
    @Query('self_recurational') selfRecurational: number,
    @Query('atantion') atantion: number,
    @Query('social_r') socialR: number,
    @Query('self_awarlaness') selfAwarlaness: number,
    @Query('grit') grit: number,
    @Query('agency') agency: number,
    @Query('perspect') perspect: number,
    @Query('kidness') kidness: number,
    @Query('responsibilty') responsibilty: number,
    @Query('gross') gross: number,
    @Query('fine_motor') fineMotor: number,
    @Query('safety') safety: number,
    @Query('personal_care') personalCare: number,
    @Query('nutrition') nutrition: number,
    @Query('drama') drama: number,
    @Query('visual_arts') visualArts: number,
    @Query('music') music: number,
    @Query('crafts') crafts: number,
    @Query('dance') dance: number,
    @Res() res: Response
  ) {
    this.pdfService.generatePdf(
      res, 
      science, geography, siviks, culture, tehnology, 
      physicalScience, earthScience, investigation, writing, 
      reading, concept, alphabetic, comunication, photological, 
      listening, logic, compare, pattern, measurement, shapes, 
      spatal, numberSense, selfRecurational, atantion, socialR, 
      selfAwarlaness, grit, agency, perspect, kidness, responsibilty, 
      gross, fineMotor, safety, personalCare, nutrition, drama, 
      visualArts, music, crafts, dance
    );
  }
}