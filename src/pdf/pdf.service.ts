import { Injectable } from '@nestjs/common';
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
import { Response } from 'express';
import * as path from 'path';


@Injectable()
export class PdfService {
    async generatePdf(res: Response, science: number, geography: number, siviks: number, culture: number, tehnology: number, physicalScience?: number, earthScience?: number, investigation?: number, writing?: number, reading?: number, concept?: number, alphabetic?: number, comunication?: number, photological?: number, listening?: number, logic?: number, compare?: number, pattern?: number, measurement?: number, shapes?: number, spatal?: number, numberSense?: number, selfRecurational?: number, atantion?: number, socialR?: number, selfAwarlaness?: number, grit?: number, agency?: number, perspect?: number, kidness?: number, responsibilty?: number, gross?: number, fineMotor?: number, safety?: number, personalCare?: number, nutrition?: number, drama?: number, visualArts?: number, music?: number, crafts?: number, dance?: number): Promise<void> {
        const outputDir = path.join(__dirname, '..', '..', 'public'); // Путь к папке public
        const filePath = path.join(outputDir, 'test.pdf');

        try {
            // Убедитесь, что директория существует
            await fs.ensureDir(outputDir);

            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();

            // Создаем HTML контент с CSS и изображениями
            const htmlContent = `
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="http://localhost:3000/style/style.css">
            <title>Круг и стрелочки</title>
        </head>
<body>
<div class="myconteiner">
    <div style="display: flex; justify-content: center; gap:10px">
      <div>
        <p>Science and Social Studies </p>
        <div>
          <label for="numberInput">Science and social studies<input type="number" id="numberInput" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>
        <div>
          <label for="Geography">Geography<input type="number" id="Geography" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>
        <div>
          <label for="Siviks">Sivics & Economics<input type="number" id="Siviks" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>

        <div>
          <label for="Culture">Culture & Community<input type="number" id="Culture" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>

        <div>
          <label for="Tehnology">Tehnology<input type="number" id="Tehnology" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>

        <div>
          <label for="Physical_science">Physical science<input type="number" id="Physical_science" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>

        <div>
          <label for="Earth_science">Natural & Earh science<input type="number" id="Earth_science" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>


        <div>
          <label for="Investigation">Investigation & Inquary<input type="number" id="Investigation" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>
      </div>

      <div>
        <p>Language and Literacy</p>
        <div>
          <label for="Writing">Writing<input type="number" id="Writing" min="1" max="8" placeholder="1 to 8"></label>
        </div>
        <div>
          <label for="Reading">Reading Comprehension<input type="number" id="Reading" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>

        <div>
          <label for="Concept">Concept of print<input type="number" id="Concept" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>


        <div>
          <label for="Alphabetic">Alphabetic knowlege<input type="number" id="Alphabetic" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>

        <div>
          <label for="Comunication">Comunication<input type="number" id="Comunication" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>


        <div>
          <label for="Photological">Photological<input type="number" id="Photological" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>

        <div>
          <label for="Listening">Listening<input type="number" id="Listening" min="1" max="8"
              placeholder="1 to 8"></label>
        </div>
      </div>

      <div>

        <p>Math and Logic</p>
        <div>
          <label for="Logic">Logic & Reasoning<input type="number" id="Logic" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Compare">Compare & Contrast<input type="number" id="Compare" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>
        <!-- тут -->
        <div>
          <label for="Pattern">Pattern<input type="number" id="Pattern" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Measurement">Measurement<input type="number" id="Measurement" min="1" max="8"
              placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Shapes">Shapes<input type="number" id="Shapes" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Spatal">Spatal Awarenes<input type="number" id="Spatal" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="NumberSense">Number Sense<input type="number" id="NumberSense" min="1" max="8"
              placeholder="1 to 8">
          </label>
        </div>
      </div>

      <div>
        <p>Social Amotional</p>
        <div>
          <label for="SelfRecurational">Self-Recurational<input type="number" id="SelfRecurational" min="1" max="8"
              placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Atantion">Attantion & Persisytance<input type="number" id="Atantion" min="1" max="8"
              placeholder="1 to 8">
          </label>
        </div>

     
        <div>
          <label for="SocialR">Social RelationShips<input type="number" id="SocialR" min="1" max="8"
              placeholder="1 to 8">
          </label>
        </div>


        <div>
          <label for="SelfAwarlaness">Self-Awarlaness<input type="number" id="SelfAwarlaness" min="1" max="8"
              placeholder="1 to 8">
          </label>
        </div>
      </div>

      <div>

        <p>Personality</p>
        <div>
          <label for="Grit">Grit<input type="number" id="Grit" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>


        <div>
          <label for="Agency">Agency<input type="number" id="Agency" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Perspect">Perspect<input type="number" id="Perspect" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>


        <div>
          <label for="Kidness">Kidness<input type="number" id="Kidness" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Responsibilty">Responsibilty<input type="number" id="Responsibilty" min="1" max="8"
              placeholder="1 to 8">
          </label>
        </div>

      </div>

      <div>
        <p>Physical Devolopment</p>
        <div>
          <label for="Gross">Gross Motor<input type="number" id="Gross" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="FineMotor">Fine Motor<input type="number" id="FineMotor" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Safety">Safety<input type="number" id="Safety" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="PersonalCare">Personal Care<input type="number" id="PersonalCare" min="1" max="8"
              placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Nutrition">Nutrition<input type="number" id="Nutrition" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>
      </div>
      <div>
        <p>Arts and Technoologies</p>
        <div>
          <label for="Drama">Drama<input type="number" id="Drama" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="VisualArts">Visual Arts<input type="number" id="VisualArts" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Music">Music<input type="number" id="Music" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>


        <div>
          <label for="Crafts">Crafts<input type="number" id="Crafts" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>

        <div>
          <label for="Dance">Dance<input type="number" id="Dance" min="1" max="8" placeholder="1 to 8">
          </label>
        </div>
      </div>
    </div>
</div>
<div style='text-align:center'>
  <img src="http://localhost:3000/img/image.jpg" width="760px;">
</div>

<div class="container">
    <div class="radio-wrapper">
      <input type="radio" name="science-radio" class="radio1">
      <input type="radio" name="science-radio" class="radio2">
      <input type="radio" name="science-radio" class="radio3">
      <input type="radio" name="science-radio" class="radio4">
      <input type="radio" name="science-radio" class="radio5">
      <input type="radio" name="science-radio" class="radio6">
      <input type="radio" name="science-radio" class="radio7">
      <input type="radio" name="science-radio" class="radio8">
    </div>

    <div class="radio-gography">
      <input type="radio" name="geo-radio" class="radio1">
      <input type="radio" name="geo-radio" class="radio2">
      <input type="radio" name="geo-radio" class="radio3">
      <input type="radio" name="geo-radio" class="radio4">
      <input type="radio" name="geo-radio" class="radio5">
      <input type="radio" name="geo-radio" class="radio6">
      <input type="radio" name="geo-radio" class="radio7">
      <input type="radio" name="geo-radio" class="radio8">
    </div>

    <div class="radio-siviks">
      <input type="radio" name="siviks-radio" class="radio1">
      <input type="radio" name="siviks-radio" class="radio2">
      <input type="radio" name="siviks-radio" class="radio3">
      <input type="radio" name="siviks-radio" class="radio4">
      <input type="radio" name="siviks-radio" class="radio5">
      <input type="radio" name="siviks-radio" class="radio6">
      <input type="radio" name="siviks-radio" class="radio7">
      <input type="radio" name="siviks-radio" class="radio8">
    </div>

    <div class="radio-culture">
      <input type="radio" name="culture-radio" class="radio1">
      <input type="radio" name="culture-radio" class="radio2">
      <input type="radio" name="culture-radio" class="radio3">
      <input type="radio" name="culture-radio" class="radio4">
      <input type="radio" name="culture-radio" class="radio5">
      <input type="radio" name="culture-radio" class="radio6">
      <input type="radio" name="culture-radio" class="radio7">
      <input type="radio" name="culture-radio" class="radio8">
    </div>


    <div class="radio-tehnology">
      <input type="radio" name="tehnology-radio" class="radio1">
      <input type="radio" name="tehnology-radio" class="radio2">
      <input type="radio" name="tehnology-radio" class="radio3">
      <input type="radio" name="tehnology-radio" class="radio4">
      <input type="radio" name="tehnology-radio" class="radio5">
      <input type="radio" name="tehnology-radio" class="radio6">
      <input type="radio" name="tehnology-radio" class="radio7">
      <input type="radio" name="tehnology-radio" class="radio8">
    </div>


    <div class="radio-physical_science">
      <input type="radio" name="physical_science-radio" class="radio1">
      <input type="radio" name="physical_science-radio" class="radio2">
      <input type="radio" name="physical_science-radio" class="radio3">
      <input type="radio" name="physical_science-radio" class="radio4">
      <input type="radio" name="physical_science-radio" class="radio5">
      <input type="radio" name="physical_science-radio" class="radio6">
      <input type="radio" name="physical_science-radio" class="radio7">
      <input type="radio" name="physical_science-radio" class="radio8">
    </div>



    <div class="radio-earth_science">
      <input type="radio" name="earth_science-radio" class="radio1">
      <input type="radio" name="earth_science-radio" class="radio2">
      <input type="radio" name="earth_science-radio" class="radio3">
      <input type="radio" name="earth_science-radio" class="radio4">
      <input type="radio" name="earth_science-radio" class="radio5">
      <input type="radio" name="earth_science-radio" class="radio6">
      <input type="radio" name="earth_science-radio" class="radio7">
      <input type="radio" name="earth_science-radio" class="radio8">
    </div>

    <div class="radio-investigation">
      <input type="radio" name="investigation-radio" class="radio1">
      <input type="radio" name="investigation-radio" class="radio2">
      <input type="radio" name="investigation-radio" class="radio3">
      <input type="radio" name="investigation-radio" class="radio4">
      <input type="radio" name="investigation-radio" class="radio5">
      <input type="radio" name="investigation-radio" class="radio6">
      <input type="radio" name="investigation-radio" class="radio7">
      <input type="radio" name="investigation-radio" class="radio8">
    </div>

    <div class="radio-writing">
      <input type="radio" name="writing-radio" class="radio1">
      <input type="radio" name="writing-radio" class="radio2">
      <input type="radio" name="writing-radio" class="radio3">
      <input type="radio" name="writing-radio" class="radio4">
      <input type="radio" name="writing-radio" class="radio5">
      <input type="radio" name="writing-radio" class="radio6">
      <input type="radio" name="writing-radio" class="radio7">
      <input type="radio" name="writing-radio" class="radio8">
    </div>

    <div class="radio-reading">
      <input type="radio" name="reading-radio" class="radio1">
      <input type="radio" name="reading-radio" class="radio2">
      <input type="radio" name="reading-radio" class="radio3">
      <input type="radio" name="reading-radio" class="radio4">
      <input type="radio" name="reading-radio" class="radio5">
      <input type="radio" name="reading-radio" class="radio6">
      <input type="radio" name="reading-radio" class="radio7">
      <input type="radio" name="reading-radio" class="radio8">
    </div>

    <div class="radio-concept">
      <input type="radio" name="concept-radio" class="radio1">
      <input type="radio" name="concept-radio" class="radio2">
      <input type="radio" name="concept-radio" class="radio3">
      <input type="radio" name="concept-radio" class="radio4">
      <input type="radio" name="concept-radio" class="radio5">
      <input type="radio" name="concept-radio" class="radio6">
      <input type="radio" name="concept-radio" class="radio7">
      <input type="radio" name="concept-radio" class="radio8">
    </div>

    <div class="radio-alphabetic">
      <input type="radio" name="alphabetic-radio" class="radio1">
      <input type="radio" name="alphabetic-radio" class="radio2">
      <input type="radio" name="alphabetic-radio" class="radio3">
      <input type="radio" name="alphabetic-radio" class="radio4">
      <input type="radio" name="alphabetic-radio" class="radio5">
      <input type="radio" name="alphabetic-radio" class="radio6">
      <input type="radio" name="alphabetic-radio" class="radio7">
      <input type="radio" name="alphabetic-radio" class="radio8">
    </div>


    <div class="radio-comunication">
      <input type="radio" name="comunication-radio" class="radio1">
      <input type="radio" name="comunication-radio" class="radio2">
      <input type="radio" name="comunication-radio" class="radio3">
      <input type="radio" name="comunication-radio" class="radio4">
      <input type="radio" name="comunication-radio" class="radio5">
      <input type="radio" name="comunication-radio" class="radio6">
      <input type="radio" name="comunication-radio" class="radio7">
      <input type="radio" name="comunication-radio" class="radio8">
    </div>

    <div class="radio-photological">
      <input type="radio" name="photological-radio" class="radio1">
      <input type="radio" name="photological-radio" class="radio2">
      <input type="radio" name="photological-radio" class="radio3">
      <input type="radio" name="photological-radio" class="radio4">
      <input type="radio" name="photological-radio" class="radio5">
      <input type="radio" name="photological-radio" class="radio6">
      <input type="radio" name="photological-radio" class="radio7">
      <input type="radio" name="photological-radio" class="radio8">
    </div>


    <div class="radio-listening">
      <input type="radio" name="listening-radio" class="radio1">
      <input type="radio" name="listening-radio" class="radio2">
      <input type="radio" name="listening-radio" class="radio3">
      <input type="radio" name="listening-radio" class="radio4">
      <input type="radio" name="listening-radio" class="radio5">
      <input type="radio" name="listening-radio" class="radio6">
      <input type="radio" name="listening-radio" class="radio7">
      <input type="radio" name="listening-radio" class="radio8">
    </div>

    <div class="radio-logic">
      <input type="radio" name="logic-radio" class="radio1">
      <input type="radio" name="logic-radio" class="radio2">
      <input type="radio" name="logic-radio" class="radio3">
      <input type="radio" name="logic-radio" class="radio4">
      <input type="radio" name="logic-radio" class="radio5">
      <input type="radio" name="logic-radio" class="radio6">
      <input type="radio" name="logic-radio" class="radio7">
      <input type="radio" name="logic-radio" class="radio8">
    </div>


    <div class="radio-compare">
      <input type="radio" name="compare-radio" class="radio1">
      <input type="radio" name="compare-radio" class="radio2">
      <input type="radio" name="compare-radio" class="radio3">
      <input type="radio" name="compare-radio" class="radio4">
      <input type="radio" name="compare-radio" class="radio5">
      <input type="radio" name="compare-radio" class="radio6">
      <input type="radio" name="compare-radio" class="radio7">
      <input type="radio" name="compare-radio" class="radio8">
    </div>

    <div class="radio-pattern">
      <input type="radio" name="pattern-radio" class="radio1">
      <input type="radio" name="pattern-radio" class="radio2">
      <input type="radio" name="pattern-radio" class="radio3">
      <input type="radio" name="pattern-radio" class="radio4">
      <input type="radio" name="pattern-radio" class="radio5">
      <input type="radio" name="pattern-radio" class="radio6">
      <input type="radio" name="pattern-radio" class="radio7">
      <input type="radio" name="pattern-radio" class="radio8">
    </div>

    <div class="radio-measurement">
      <input type="radio" name="measurement-radio" class="radio1">
      <input type="radio" name="measurement-radio" class="radio2">
      <input type="radio" name="measurement-radio" class="radio3">
      <input type="radio" name="measurement-radio" class="radio4">
      <input type="radio" name="measurement-radio" class="radio5">
      <input type="radio" name="measurement-radio" class="radio6">
      <input type="radio" name="measurement-radio" class="radio7">
      <input type="radio" name="measurement-radio" class="radio8">
    </div>

    <div class="radio-shapes">
      <input type="radio" name="shapes-radio" class="radio1">
      <input type="radio" name="shapes-radio" class="radio2">
      <input type="radio" name="shapes-radio" class="radio3">
      <input type="radio" name="shapes-radio" class="radio4">
      <input type="radio" name="shapes-radio" class="radio5">
      <input type="radio" name="shapes-radio" class="radio6">
      <input type="radio" name="shapes-radio" class="radio7">
      <input type="radio" name="shapes-radio" class="radio8">
    </div>

    <div class="radio-spatal">
      <input type="radio" name="spatal-radio" class="radio1">
      <input type="radio" name="spatal-radio" class="radio2">
      <input type="radio" name="spatal-radio" class="radio3">
      <input type="radio" name="spatal-radio" class="radio4">
      <input type="radio" name="spatal-radio" class="radio5">
      <input type="radio" name="spatal-radio" class="radio6">
      <input type="radio" name="spatal-radio" class="radio7">
      <input type="radio" name="spatal-radio" class="radio8">
    </div>


    <div class="radio-NumberSense">
      <input type="radio" name="NumberSense-radio" class="radio1">
      <input type="radio" name="NumberSense-radio" class="radio2">
      <input type="radio" name="NumberSense-radio" class="radio3">
      <input type="radio" name="NumberSense-radio" class="radio4">
      <input type="radio" name="NumberSense-radio" class="radio5">
      <input type="radio" name="NumberSense-radio" class="radio6">
      <input type="radio" name="NumberSense-radio" class="radio7">
      <input type="radio" name="NumberSense-radio" class="radio8">
    </div>

    <div class="radio-SelfRecurational">
      <input type="radio" name="SelfRecurational-radio" class="radio1">
      <input type="radio" name="SelfRecurational-radio" class="radio2">
      <input type="radio" name="SelfRecurational-radio" class="radio3">
      <input type="radio" name="SelfRecurational-radio" class="radio4">
      <input type="radio" name="SelfRecurational-radio" class="radio5">
      <input type="radio" name="SelfRecurational-radio" class="radio6">
      <input type="radio" name="SelfRecurational-radio" class="radio7">
      <input type="radio" name="SelfRecurational-radio" class="radio8">
    </div>

    <div class="radio-SelfAwarlaness">
      <input type="radio" name="SelfAwarlaness-radio" class="radio1">
      <input type="radio" name="SelfAwarlaness-radio" class="radio2">
      <input type="radio" name="SelfAwarlaness-radio" class="radio3">
      <input type="radio" name="SelfAwarlaness-radio" class="radio4">
      <input type="radio" name="SelfAwarlaness-radio" class="radio5">
      <input type="radio" name="SelfAwarlaness-radio" class="radio6">
      <input type="radio" name="SelfAwarlaness-radio" class="radio7">
      <input type="radio" name="SelfAwarlaness-radio" class="radio8">
    </div>

    <div class="radio-Atantion">
      <input type="radio" name="Atantion-radio" class="radio1">
      <input type="radio" name="Atantion-radio" class="radio2">
      <input type="radio" name="Atantion-radio" class="radio3">
      <input type="radio" name="Atantion-radio" class="radio4">
      <input type="radio" name="Atantion-radio" class="radio5">
      <input type="radio" name="Atantion-radio" class="radio6">
      <input type="radio" name="Atantion-radio" class="radio7">
      <input type="radio" name="Atantion-radio" class="radio8">
    </div>


    <div class="radio-SocialR">
      <input type="radio" name="SocialR-radio" class="radio1">
      <input type="radio" name="SocialR-radio" class="radio2">
      <input type="radio" name="SocialR-radio" class="radio3">
      <input type="radio" name="SocialR-radio" class="radio4">
      <input type="radio" name="SocialR-radio" class="radio5">
      <input type="radio" name="SocialR-radio" class="radio6">
      <input type="radio" name="SocialR-radio" class="radio7">
      <input type="radio" name="SocialR-radio" class="radio8">
    </div>


    <div class="radio-Grit">
      <input type="radio" name="Grit-radio" class="radio1">
      <input type="radio" name="Grit-radio" class="radio2">
      <input type="radio" name="Grit-radio" class="radio3">
      <input type="radio" name="Grit-radio" class="radio4">
      <input type="radio" name="Grit-radio" class="radio5">
      <input type="radio" name="Grit-radio" class="radio6">
      <input type="radio" name="Grit-radio" class="radio7">
      <input type="radio" name="Grit-radio" class="radio8">
    </div>


    <div class="radio-Agency">
      <input type="radio" name="Agency-radio" class="radio1">
      <input type="radio" name="Agency-radio" class="radio2">
      <input type="radio" name="Agency-radio" class="radio3">
      <input type="radio" name="Agency-radio" class="radio4">
      <input type="radio" name="Agency-radio" class="radio5">
      <input type="radio" name="Agency-radio" class="radio6">
      <input type="radio" name="Agency-radio" class="radio7">
      <input type="radio" name="Agency-radio" class="radio8">
    </div>

    <div class="radio-Perspect">
      <input type="radio" name="Perspect-radio" class="radio1">
      <input type="radio" name="Perspect-radio" class="radio2">
      <input type="radio" name="Perspect-radio" class="radio3">
      <input type="radio" name="Perspect-radio" class="radio4">
      <input type="radio" name="Perspect-radio" class="radio5">
      <input type="radio" name="Perspect-radio" class="radio6">
      <input type="radio" name="Perspect-radio" class="radio7">
      <input type="radio" name="Perspect-radio" class="radio8">
    </div>


    <div class="radio-Kidness">
      <input type="radio" name="Kidness-radio" class="radio1">
      <input type="radio" name="Kidness-radio" class="radio2">
      <input type="radio" name="Kidness-radio" class="radio3">
      <input type="radio" name="Kidness-radio" class="radio4">
      <input type="radio" name="Kidness-radio" class="radio5">
      <input type="radio" name="Kidness-radio" class="radio6">
      <input type="radio" name="Kidness-radio" class="radio7">
      <input type="radio" name="Kidness-radio" class="radio8">
    </div>


    <div class="radio-Responsibilty">
      <input type="radio" name="Responsibilty-radio" class="radio1">
      <input type="radio" name="Responsibilty-radio" class="radio2">
      <input type="radio" name="Responsibilty-radio" class="radio3">
      <input type="radio" name="Responsibilty-radio" class="radio4">
      <input type="radio" name="Responsibilty-radio" class="radio5">
      <input type="radio" name="Responsibilty-radio" class="radio6">
      <input type="radio" name="Responsibilty-radio" class="radio7">
      <input type="radio" name="Responsibilty-radio" class="radio8">
    </div>


    <div class="radio-Gross">
      <input type="radio" name="Gross-radio" class="radio1">
      <input type="radio" name="Gross-radio" class="radio2">
      <input type="radio" name="Gross-radio" class="radio3">
      <input type="radio" name="Gross-radio" class="radio4">
      <input type="radio" name="Gross-radio" class="radio5">
      <input type="radio" name="Gross-radio" class="radio6">
      <input type="radio" name="Gross-radio" class="radio7">
      <input type="radio" name="Gross-radio" class="radio8">
    </div>

    <div class="radio-Safety">
      <input type="radio" name="Safety-radio" class="radio1">
      <input type="radio" name="Safety-radio" class="radio2">
      <input type="radio" name="Safety-radio" class="radio3">
      <input type="radio" name="Safety-radio" class="radio4">
      <input type="radio" name="Safety-radio" class="radio5">
      <input type="radio" name="Safety-radio" class="radio6">
      <input type="radio" name="Safety-radio" class="radio7">
      <input type="radio" name="Safety-radio" class="radio8">
    </div>

    <div class="radio-PersonalCare">
      <input type="radio" name="PersonalCare-radio" class="radio1">
      <input type="radio" name="PersonalCare-radio" class="radio2">
      <input type="radio" name="PersonalCare-radio" class="radio3">
      <input type="radio" name="PersonalCare-radio" class="radio4">
      <input type="radio" name="PersonalCare-radio" class="radio5">
      <input type="radio" name="PersonalCare-radio" class="radio6">
      <input type="radio" name="PersonalCare-radio" class="radio7">
      <input type="radio" name="PersonalCare-radio" class="radio8">
    </div>

    <div class="radio-Nutrition">
      <input type="radio" name="Nutrition-radio" class="radio1">
      <input type="radio" name="Nutrition-radio" class="radio2">
      <input type="radio" name="Nutrition-radio" class="radio3">
      <input type="radio" name="Nutrition-radio" class="radio4">
      <input type="radio" name="Nutrition-radio" class="radio5">
      <input type="radio" name="Nutrition-radio" class="radio6">
      <input type="radio" name="Nutrition-radio" class="radio7">
      <input type="radio" name="Nutrition-radio" class="radio8">
    </div>

    <div class="radio-Drama">
      <input type="radio" name="Drama-radio" class="radio1">
      <input type="radio" name="Drama-radio" class="radio2">
      <input type="radio" name="Drama-radio" class="radio3">
      <input type="radio" name="Drama-radio" class="radio4">
      <input type="radio" name="Drama-radio" class="radio5">
      <input type="radio" name="Drama-radio" class="radio6">
      <input type="radio" name="Drama-radio" class="radio7">
      <input type="radio" name="Drama-radio" class="radio8">
    </div>


    <div class="radio-Music">
      <input type="radio" name="Music-radio" class="radio1">
      <input type="radio" name="Music-radio" class="radio2">
      <input type="radio" name="Music-radio" class="radio3">
      <input type="radio" name="Music-radio" class="radio4">
      <input type="radio" name="Music-radio" class="radio5">
      <input type="radio" name="Music-radio" class="radio6">
      <input type="radio" name="Music-radio" class="radio7">
      <input type="radio" name="Music-radio" class="radio8">
    </div>


    <div class="radio-Crafts">
      <input type="radio" name="Crafts-radio" class="radio1">
      <input type="radio" name="Crafts-radio" class="radio2">
      <input type="radio" name="Crafts-radio" class="radio3">
      <input type="radio" name="Crafts-radio" class="radio4">
      <input type="radio" name="Crafts-radio" class="radio5">
      <input type="radio" name="Crafts-radio" class="radio6">
      <input type="radio" name="Crafts-radio" class="radio7">
      <input type="radio" name="Crafts-radio" class="radio8">
    </div>


    <div class="radio-Dance">
      <input type="radio" name="Dance-radio" class="radio1">
      <input type="radio" name="Dance-radio" class="radio2">
      <input type="radio" name="Dance-radio" class="radio3">
      <input type="radio" name="Dance-radio" class="radio4">
      <input type="radio" name="Dance-radio" class="radio5">
      <input type="radio" name="Dance-radio" class="radio6">
      <input type="radio" name="Dance-radio" class="radio7">
      <input type="radio" name="Dance-radio" class="radio8">
    </div>

    <div class="radio-FineMotor">
      <input type="radio" name="FineMotor-radio" class="radio1">
      <input type="radio" name="FineMotor-radio" class="radio2">
      <input type="radio" name="FineMotor-radio" class="radio3">
      <input type="radio" name="FineMotor-radio" class="radio4">
      <input type="radio" name="FineMotor-radio" class="radio5">
      <input type="radio" name="FineMotor-radio" class="radio6">
      <input type="radio" name="FineMotor-radio" class="radio7">
      <input type="radio" name="FineMotor-radio" class="radio8">
    </div>


    
    <div class="radio-VisualArts">
      <input type="radio" name="VisualArts-radio" class="radio1">
      <input type="radio" name="VisualArts-radio" class="radio2">
      <input type="radio" name="VisualArts-radio" class="radio3">
      <input type="radio" name="VisualArts-radio" class="radio4">
      <input type="radio" name="VisualArts-radio" class="radio5">
      <input type="radio" name="VisualArts-radio" class="radio6">
      <input type="radio" name="VisualArts-radio" class="radio7">
      <input type="radio" name="VisualArts-radio" class="radio8">
    </div>
</div>

</div>
</body>
        </html>
            `;




            console.log('Setting content...');
            await page.setContent(htmlContent);


            // Ждем загрузки изображения и CSS
            await page.waitForSelector('img');
            await page.waitForSelector('#numberInput');
            await page.waitForSelector('#Geography');
            await page.waitForSelector('#Siviks');
            await page.waitForSelector('#Culture');
            // await page.waitForFunction('#Tehnology')
            console.log('111')

            // Устанавливаем значения полей
            // Устанавливаем значения полей
            const result = await page.evaluate((
                science: any, geography: any, siviks: any, culture: any, tehnology: any, physicalScience: any, earthScience: any,
                investigation: any, writing: any, reading: any, concept: any, alphabetic: any, comunication: any, photological: any,
                listening: any, logic: any, compare: any, pattern: any, measurement: any, shapes: any, spatal: any, numberSense: any,
                selfRecurational: any, atantion: any, socialR: any, selfAwarlaness: any, grit: any, agency: any, perspect: any,
                kidness: any, responsibilty: any, gross: any, fineMotor: any, safety: any, personalCare: any, nutrition: any,
                drama: any, visualArts: any, music: any, crafts: any, dance: any
            ) => {
                const selectors = {
                    science: `input[name="science-radio"].radio${science}`,
                    geography: `input[name="geo-radio"].radio${geography}`,
                    siviks: `input[name="siviks-radio"].radio${siviks}`,
                    culture: `input[name="culture-radio"].radio${culture}`,
                    tehnology: `input[name="tehnology-radio"].radio${tehnology}`,
                    physicalScience: `input[name="physical_science-radio"].radio${physicalScience}`,
                    earthScience: `input[name="earth-science-radio"].radio${earthScience}`,
                    investigation: `input[name="investigation-radio"].radio${investigation}`,
                    writing: `input[name="writing-radio"].radio${writing}`,
                    reading: `input[name="reading-radio"].radio${reading}`,
                    concept: `input[name="concept-radio"].radio${concept}`,
                    alphabetic: `input[name="alphabetic-radio"].radio${alphabetic}`,
                    comunication: `input[name="comunication-radio"].radio${comunication}`,
                    photological: `input[name="photological-radio"].radio${photological}`,
                    listening: `input[name="listening-radio"].radio${listening}`,
                    logic: `input[name="logic-radio"].radio${logic}`,
                    compare: `input[name="compare-radio"].radio${compare}`,
                    pattern: `input[name="pattern-radio"].radio${pattern}`,
                    measurement: `input[name="measurement-radio"].radio${measurement}`,
                    shapes: `input[name="shapes-radio"].radio${shapes}`,
                    spatal: `input[name="spatal-radio"].radio${spatal}`,
                    numberSense: `input[name="NumberSense-radio"].radio${numberSense}`,
                    selfRecurational: `input[name="SelfRecurational-radio"].radio${selfRecurational}`,
                    atantion: `input[name="Atantion-radio"].radio${atantion}`,
                    socialR: `input[name="SocialR-radio"].radio${socialR}`,
                    selfAwarlaness: `input[name="SelfAwarlaness-radio"].radio${selfAwarlaness}`,
                    grit: `input[name="Grit-radio"].radio${grit}`,
                    agency: `input[name="Agency-radio"].radio${agency}`,
                    perspect: `input[name="Perspect-radio"].radio${perspect}`,
                    kidness: `input[name="Kidness-radio"].radio${kidness}`,
                    responsibilty: `input[name="Responsibilty-radio"].radio${responsibilty}`,
                    gross: `input[name="Gross-radio"].radio${gross}`,
                    fineMotor: `input[name="FineMotor-radio"].radio${fineMotor}`,
                    safety: `input[name="Safety-radio"].radio${safety}`,
                    personalCare: `input[name="PersonalCare-radio"].radio${personalCare}`,
                    nutrition: `input[name="Nutrition-radio"].radio${nutrition}`,
                    drama: `input[name="Drama-radio"].radio${drama}`,
                    visualArts: `input[name="VisualArts-radio"].radio${visualArts}`,
                    music: `input[name="Music-radio"].radio${music}`,
                    crafts: `input[name="Crafts-radio"].radio${crafts}`,
                    dance: `input[name="Dance-radio"].radio${dance}`
                };
                console.log('selectors',selectors)
                // Функция для установки выбранной радио-кнопки и скрытия остальных
                // function setRadio(selectedRadioSelector: string, name: string) {
                //     console.log('name', name)
                //     const radio = document.querySelector(selectedRadioSelector) as HTMLInputElement;
                //     if (radio) {

                //         radio.checked = true;
                //         document.querySelectorAll(`input[name="${name}-radio"]`).forEach((r) => {
                //             (r as HTMLElement).style.display = r === radio ? 'block' : 'none';
                //         });
                //     }
                // }

                function setRadio(selectedRadioSelector:any, name:any) {
                    console.log('name', name)
                    const radio = document.querySelector(selectedRadioSelector);
                    if (radio) {
                        radio.checked = true;
                  
                        document.querySelectorAll(`input[name="${name}-radio"]`).forEach((r) => {
                            (r as HTMLElement).style.display = r === radio ? 'block' : 'none';
                        });
                    } else {
                        console.error(`Radio button with selector "${selectedRadioSelector}" not found.`);
                    }
                }

                // Устанавливаем радио-кнопки для всех полей
                setRadio(selectors.science, "science");
                setRadio(selectors.geography, "geo");
                setRadio(selectors.siviks, "siviks");
                setRadio(selectors.culture, "culture");
                setRadio(selectors.tehnology, "tehnology");
                setRadio(selectors.physicalScience, "physical-science");
                setRadio(selectors.earthScience, "earth-science");
                setRadio(selectors.investigation, "investigation");
                setRadio(selectors.writing, "writing");
                setRadio(selectors.reading, "reading");
                setRadio(selectors.concept, "concept");
                setRadio(selectors.alphabetic, "alphabetic");
                setRadio(selectors.comunication, "comunication");
                setRadio(selectors.photological, "photological");
                setRadio(selectors.listening, "listening");
                setRadio(selectors.logic, "logic");
                setRadio(selectors.compare, "compare");
                setRadio(selectors.pattern, "pattern");
                setRadio(selectors.measurement, "measurement");
                setRadio(selectors.shapes, "shapes");
                setRadio(selectors.spatal, "spatal");
                setRadio(selectors.numberSense, "numberSense");
                setRadio(selectors.selfRecurational, "selfRecurational");
                setRadio(selectors.atantion, "atantion");
                setRadio(selectors.socialR, "socialR");
                setRadio(selectors.selfAwarlaness, "SelfAwarlaness");
                setRadio(selectors.grit, "grit");
                setRadio(selectors.agency, "agency");
                setRadio(selectors.perspect, "perspect");
                setRadio(selectors.kidness, "kidness");
                setRadio(selectors.responsibilty, "responsibilty");
                setRadio(selectors.gross, "gross");
                setRadio(selectors.fineMotor, "fine-motor");
                setRadio(selectors.safety, "safety");
                setRadio(selectors.personalCare, "personal-care");
                setRadio(selectors.nutrition, "nutrition");
                setRadio(selectors.drama, "drama");
                setRadio(selectors.visualArts, "visual-arts");
                setRadio(selectors.music, "music");
                setRadio(selectors.crafts, "crafts");
                setRadio(selectors.dance, "dance");

            }, science, geography, siviks, culture, tehnology, physicalScience, earthScience, investigation, writing, reading, concept, alphabetic, comunication, photological, listening, logic, compare, pattern, measurement, shapes, spatal, numberSense, selfRecurational, atantion, socialR, selfAwarlaness, grit, agency, perspect, kidness, responsibilty, gross, fineMotor, safety, personalCare, nutrition, drama, visualArts, music, crafts, dance);



            await page.waitForFunction(() => document.querySelector('#numberInput') !== null); // Ожидание загрузки элемента
            // Делаем скриншот и генерируем PDF
            // Ждем, пока все элементы загружены и скрипты выполнены
            await page.pdf({
                path: filePath,
                format: 'A4',
                printBackground: true,
            });
            console.log('PDF generated.');
            // Получаем размер файла
            const stat = await fs.stat(filePath);

            console.log('stat', stat.size)
            // Настройка заголовков для скачивания
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="test.pdf"');

            res.setHeader('Content-Length', stat.size);

            // Чтение файла и отправка его в ответ
            const fileStream = fs.createReadStream(filePath);
            console.log('fileStream')
            fileStream.pipe(res);

            // Закрываем браузер после отправки
            fileStream.on('end', async () => {
                console.log('отработка')
                await browser.close();
                await fs.remove(filePath);
            });


            // await browser.close();

        } catch (error) {
            console.error('Error generating PDF:', error);
            res.status(500).send('Error generating PDF');
        }


    }
}
