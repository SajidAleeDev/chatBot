"use client";

import useSWR from "swr";
import Select from "react-select";
const fetchhModels = () => fetch("/api/getEngnes").then((res) => res.json());

function ModelSec() {
  const { data: models, isLoading } = useSWR("models", fetchhModels);
  const { data: model, mutate: setmodel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  console.log(models, "models is here");
  const options = [
    {
      value: "babbage",
      label: "babbage",
    },
    {
      value: "text-davinci-003",
      label: "text-davinci-003",
    },
    {
      value: "davinci",
      label: "davinci",
    },
    {
      value: "text-davinci-edit-001",
      label: "text-davinci-edit-001",
    },
    {
      value: "babbage-code-search-code",
      label: "babbage-code-search-code",
    },
    {
      value: "text-similarity-babbage-001",
      label: "text-similarity-babbage-001",
    },
    {
      value: "code-davinci-edit-001",
      label: "code-davinci-edit-001",
    },
    {
      value: "text-davinci-001",
      label: "text-davinci-001",
    },
    {
      value: "ada",
      label: "ada",
    },
    {
      value: "babbage-code-search-text",
      label: "babbage-code-search-text",
    },
    {
      value: "babbage-similarity",
      label: "babbage-similarity",
    },
    {
      value: "gpt-3.5-turbo-16k-0613",
      label: "gpt-3.5-turbo-16k-0613",
    },
    {
      value: "code-search-babbage-text-001",
      label: "code-search-babbage-text-001",
    },
    {
      value: "text-curie-001",
      label: "text-curie-001",
    },
    {
      value: "gpt-3.5-turbo-0301",
      label: "gpt-3.5-turbo-0301",
    },
    {
      value: "gpt-3.5-turbo-16k",
      label: "gpt-3.5-turbo-16k",
    },
    {
      value: "code-search-babbage-code-001",
      label: "code-search-babbage-code-001",
    },
    {
      value: "text-ada-001",
      label: "text-ada-001",
    },
    {
      value: "text-similarity-ada-001",
      label: "text-similarity-ada-001",
    },
    {
      value: "text-davinci-002",
      label: "text-davinci-002",
    },
    {
      value: "curie-instruct-beta",
      label: "curie-instruct-beta",
    },
    {
      value: "ada-code-search-code",
      label: "ada-code-search-code",
    },
    {
      value: "ada-similarity",
      label: "ada-similarity",
    },
    {
      value: "code-search-ada-text-001",
      label: "code-search-ada-text-001",
    },
    {
      value: "text-search-ada-query-001",
      label: "text-search-ada-query-001",
    },
    {
      value: "davinci-search-document",
      label: "davinci-search-document",
    },
    {
      value: "ada-code-search-text",
      label: "ada-code-search-text",
    },
    {
      value: "text-search-ada-doc-001",
      label: "text-search-ada-doc-001",
    },
    {
      value: "davinci-instruct-beta",
      label: "davinci-instruct-beta",
    },
    {
      value: "text-similarity-curie-001",
      label: "text-similarity-curie-001",
    },
    {
      value: "code-search-ada-code-001",
      label: "code-search-ada-code-001",
    },
    {
      value: "ada-search-query",
      label: "ada-search-query",
    },
    {
      value: "text-search-davinci-query-001",
      label: "text-search-davinci-query-001",
    },
    {
      value: "curie-search-query",
      label: "curie-search-query",
    },
    {
      value: "davinci-search-query",
      label: "davinci-search-query",
    },
    {
      value: "babbage-search-document",
      label: "babbage-search-document",
    },
    {
      value: "ada-search-document",
      label: "ada-search-document",
    },
    {
      value: "text-search-curie-query-001",
      label: "text-search-curie-query-001",
    },
    {
      value: "text-search-babbage-doc-001",
      label: "text-search-babbage-doc-001",
    },
    {
      value: "whisper-1",
      label: "whisper-1",
    },
    {
      value: "curie-search-document",
      label: "curie-search-document",
    },
    {
      value: "text-search-curie-doc-001",
      label: "text-search-curie-doc-001",
    },
    {
      value: "babbage-search-query",
      label: "babbage-search-query",
    },
    {
      value: "text-babbage-001",
      label: "text-babbage-001",
    },
    {
      value: "text-search-davinci-doc-001",
      label: "text-search-davinci-doc-001",
    },
    {
      value: "text-search-babbage-query-001",
      label: "text-search-babbage-query-001",
    },
    {
      value: "curie-similarity",
      label: "curie-similarity",
    },
    {
      value: "text-embedding-ada-002",
      label: "text-embedding-ada-002",
    },
    {
      value: "curie",
      label: "curie",
    },
    {
      value: "text-similarity-davinci-001",
      label: "text-similarity-davinci-001",
    },
    {
      value: "gpt-3.5-turbo-0613",
      label: "gpt-3.5-turbo-0613",
    },
    {
      value: "davinci-similarity",
      label: "davinci-similarity",
    },
    {
      value: "gpt-3.5-turbo",
      label: "gpt-3.5-turbo",
    },
  ];

  return (
    <div className=" mt-2">
      <Select
        placeholder={model}
        defaultValue={model}
        options={options}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => " bg-[#434654] border-[#434654] ",
        }}
        onChange={(e) => setmodel(e.value)}
      />
    </div>
  );
}

export default ModelSec;
