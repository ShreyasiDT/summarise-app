"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import getYouTubeID from "get-youtube-id";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { cn } from "~/lib/utils";
import { LinkValidator, type LinkRequest } from "~/lib/validators/link";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

const ChatCompletion = () => {
  const form = useForm<LinkRequest>({
    resolver: zodResolver(LinkValidator),
    defaultValues: {
      url: "",
    },
  });

  const router = useRouter();

  const goToSummary = (data: LinkRequest) => {
    const url = data.url;
    const videoId = getYouTubeID(url);
    router.push(`/summary/${videoId}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => goToSummary(data))}>
        <div className="flex w-full gap-4">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="youtube.com/watch?v=dQw4w9WgXcQ"
                    {...field}
                    className="min-w-52"
                    aria-label="Enter YouTube video URL"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant={"ghost"}
            disabled={form?.watch("url") === ""}
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              "flex-shrink-0",
            )}
            aria-label="Generate summary"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-2 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Generate</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ChatCompletion;
