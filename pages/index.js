import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'

const Document = styled.div`
  background: #090902;
  color: #EBE74D;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  width: 100%;
  padding-top: 80px;
  line-height: 1.15;
  font-size: 48px;
  margin-bottom: 30px;
`;

const Hyperlink = styled.a`
  color: #067df7;
  text-decoration: underline;
  font-size: 18px;
  display: block;
  margin: 10px auto;
  width: 100%;
  text-align: center;
`;

export default function () {
  return (
    <>
      <Head />
      <Document>
        <Title>Help Hong Kong dot Taiwan now.</Title>
        <Hyperlink href="https://g0v.hackmd.io/UzsZlPnwQCGfxtF1PJz4rQ">在台灣求學</Hyperlink>
        <Hyperlink href="https://docs.google.com/spreadsheets/d/1bwmyPrUH7UtDFXLekpGLNLYhOuglTIvyrYnJQMmfq9g">在台灣就醫</Hyperlink>
      </Document>
    </>
  );
}
